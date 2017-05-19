package org.humber;

import java.time.LocalDate;

/**
 * Created by campitos on 4/05/17.
 */
public class ConsultaOii {

    Integer nosecuenc;
    String paterno;
    String materno;
    String nombre;
    LocalDate fec_nac; //= LocalDate.of(2014, Month.JULY, 20);
   Integer edad;
   LocalDate fecha_impe;
   String claveoii;
  String desc_oii;
  String accion;

    public ConsultaOii() {

    }

    @Override
    public String toString() {
        return "ConsultaOii{" +
                "nosecuenc=" + nosecuenc +
                ", paterno='" + paterno + '\'' +
                ", materno='" + materno + '\'' +
                ", nombre='" + nombre + '\'' +
                ", fec_nac=" + fec_nac +
                ", edad=" + edad +
                ", fecha_impe=" + fecha_impe +
                ", claveoii='" + claveoii + '\'' +
                ", desc_oii='" + desc_oii + '\'' +
                ", accion='" + accion + '\'' +
                '}';
    }

    public ConsultaOii(Integer nosecuenc, String paterno, String materno, String nombre, LocalDate fec_nac, Integer edad, LocalDate fecha_impe, String claveoii, String desc_oii, String accion) {
        this.nosecuenc = nosecuenc;
        this.paterno = paterno;
        this.materno = materno;
        this.nombre = nombre;
        this.fec_nac = fec_nac;
        this.edad = edad;
        this.fecha_impe = fecha_impe;
        this.claveoii = claveoii;
        this.desc_oii = desc_oii;
        this.accion = accion;
    }

    public Integer getNosecuenc() {
        return nosecuenc;
    }

    public void setNosecuenc(Integer nosecuenc) {
        this.nosecuenc = nosecuenc;
    }

    public String getPaterno() {
        return paterno;
    }

    public void setPaterno(String paterno) {
        this.paterno = paterno;
    }

    public String getMaterno() {
        return materno;
    }

    public void setMaterno(String materno) {
        this.materno = materno;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public LocalDate getFec_nac() {
        return fec_nac;
    }

    public void setFec_nac(LocalDate fec_nac) {
        this.fec_nac = fec_nac;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public LocalDate getFecha_impe() {
        return fecha_impe;
    }

    public void setFecha_impe(LocalDate fecha_impe) {
        this.fecha_impe = fecha_impe;
    }

    public String getClaveoii() {
        return claveoii;
    }

    public void setClaveoii(String claveoii) {
        this.claveoii = claveoii;
    }

    public String getDesc_oii() {
        return desc_oii;
    }

    public void setDesc_oii(String desc_oii) {
        this.desc_oii = desc_oii;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }
}
