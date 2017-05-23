package org.humber;

import java.util.ArrayList;

/**
 * Created by campitos on 22/05/17.
 */
public class Arreglo {
    Integer valor;
    ArrayList<ConsultaOii> oii;

    @Override
    public String toString() {
        return "Arreglo{" +
                "valor=" + valor +
                ", oii=" + oii +
                '}';
    }

    public Integer getValor() {
        return valor;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }

    public ArrayList<ConsultaOii> getOii() {
        return oii;
    }

    public void setOii(ArrayList<ConsultaOii> oii) {
        this.oii = oii;
    }
}
