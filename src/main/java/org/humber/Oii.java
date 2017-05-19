package org.humber;

import org.springframework.data.annotation.Id;

/**
 * Created by campitos on 3/05/17.
 */
public class Oii {
    @Id
    String clave;

    String padecimiento;

    Integer bas_tiempo;

    String accion;

    Float bas_extraprima;

    @Override
    public String toString() {
        return "Oii{" +
                "clave='" + clave + '\'' +
                ", padecimiento='" + padecimiento + '\'' +
                ", bas_tiempo=" + bas_tiempo +
                ", accion='" + accion + '\'' +
                ", bas_extraprima=" + bas_extraprima +
                '}';
    }

    public Oii(String clave, String padecimiento, Integer bas_tiempo, String accion, Float bas_extraprima) {
        this.clave = clave;
        this.padecimiento = padecimiento;
        this.bas_tiempo = bas_tiempo;
        this.accion = accion;
        this.bas_extraprima = bas_extraprima;
    }

    public Oii() {
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getPadecimiento() {
        return padecimiento;
    }

    public void setPadecimiento(String padecimiento) {
        this.padecimiento = padecimiento;
    }

    public Integer getBas_tiempo() {
        return bas_tiempo;
    }

    public void setBas_tiempo(Integer bas_tiempo) {
        this.bas_tiempo = bas_tiempo;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public Float getBas_extraprima() {
        return bas_extraprima;
    }

    public void setBas_extraprima(Float bas_extraprima) {
        this.bas_extraprima = bas_extraprima;
    }
}
