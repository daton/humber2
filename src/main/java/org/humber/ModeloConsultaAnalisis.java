package org.humber;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

/**
 * Created by campitos on 17/05/17.
 */
public class ModeloConsultaAnalisis {
    XSSFWorkbook wb;
    XSSFSheet sheet;

    public void cargarArchivo(InputStream inputStream, int hoja) throws Exception {


        wb = new XSSFWorkbook(inputStream);

        sheet = wb.getSheetAt(hoja);
        System.out.println("CARGADO Y GENERADO CON EXITO");

    }

    public void analisis1() {
        int registros = sheet.getLastRowNum();
        System.out.println("NUMERO DE REGISTROS " + registros);
        int nosecInicial = (int) sheet.getRow(1).getCell(0).getNumericCellValue();
        System.out.println("NUMERO DE SEC INICIAL:" + nosecInicial);
        for (int i = 0; i < registros; i++) {
            XSSFRow row = sheet.getRow(i);
            int nosec = (int) row.getCell(0).getNumericCellValue();
            if (nosec == nosecInicial) {

            } else {
                nosecInicial = nosecInicial;
            }
            row.getCell(1);

        }


    }
}
