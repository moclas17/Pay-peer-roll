import { NextResponse } from 'next/server';
import { parse as parseCSV } from 'csv-parse/sync';
import { read as readXLSX, utils as xlsxUtils } from 'xlsx';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const ext = file.name.toLowerCase().split('.').pop();
    const buffer = await file.arrayBuffer();
    const content = Buffer.from(buffer);

    let rows: any[] = [];

    if (ext === 'csv') {
      rows = parseCSV(content.toString(), {
        columns: true,
        skip_empty_lines: true,
      });
    } else if (ext === 'xlsx') {
      const workbook = readXLSX(content);
      const sheetName = workbook.SheetNames[0];
      rows = xlsxUtils.sheet_to_json(workbook.Sheets[sheetName]);
    } else {
      return NextResponse.json({ error: 'Formato no soportado. Usa CSV o Excel.' }, { status: 400 });
    }

    // Preparamos las transacciones para firmar
    const txsToSign = rows.map((row, index) => {
      const amountInWei = BigInt(Number(row.net_payment) * 1e18); // suponiendo 18 decimales
      return {
        to: row.wallet_address,
        value: amountInWei.toString(),
        token: row.payment_token,
        metadata: {
          employee_id: row.employee_id,
          full_name: row.full_name,
          index,
        },
      };
    });

    return NextResponse.json({ transactions: txsToSign });
  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json({ error: 'Error processing file' }, { status: 500 });
  }
} 