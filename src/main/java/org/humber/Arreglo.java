package org.humber;

import java.util.ArrayList;

/**
 * Created by campitos on 22/05/17.
 * <br>
 * Esta clase es muy interesante<br>
 *    <h2>Clase para agregar grupos de consultas con num_secuencia iguales</h2>
 *    <p>Esta clase genera un arreglo cuyo tamaño tendra el mismo numero de elementos
 *    como grupos se hayan encontrado en el Excel de ConsultaOii </p>
 *    <p>El {@link ArrayList} para cada elemento del Arreglo va a varia en concordancia
 *    de elementops que haya para ese determinado numero de sec.</p>
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
