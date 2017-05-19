package org.humber;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

/**
 * Created by campitos on 17/05/17.
 */
public class ModeloConsultaAnalisis {

    public XSSFSheet analisis1(InputStream  inputStream, int hoja)throws Exception{



        XSSFWorkbook wb = new XSSFWorkbook(inputStream);

        XSSFSheet sheet = wb.getSheetAt(hoja);
        return  sheet;
    }
}
