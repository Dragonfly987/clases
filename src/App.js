import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Nombres </th>
          <th>Apellidos</th>
          <th>Correo</th>
          <th>Celular</th>
        </tr>
        <tr>
          <td> Julio </td>
          <td>Jaramillo Muñoz</td>
          <td>munozjuo@gmail.com</td>
          <td>+57 322 5870184</td>
        </tr>
        <tr>
          <td>Luisa Fernanda </td>
          <td>Marulanda Alzate</td>
          <td>luisithamaru26@gmail.com</td>
          <td>+57 300 8341594</td>
        </tr>
      </table>
    </div>
  );
}
