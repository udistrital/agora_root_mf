# agora_root_mf

El Root contiene la lógica de Single-SPA del sistema Ágora y gestiona todos los microfrontends dentro de la página web, ayuda a gestionar la comunicación entre ellos (a través del `core-mf`, que provee autenticación, roles y menú) y contiene el consumo de los assets, paleta de colores y favicon del sistema.

## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones

- [Single-SPA](https://single-spa.js.org/) 5.9
- [TypeScript](https://www.typescriptlang.org/) 4.3
- [Webpack](https://webpack.js.org/) 5.89
- [Node](https://nodejs.org/es/) 24.x
- [pnpm](https://pnpm.io/) 12.x

### Variables de Entorno

```bash
export const environment = {
  production: [Booleano que indica si está habilitado],
  entorno: [Entorno de ejecución],
  autenticacion: [Booleano que indica si está habilitada],
  notificaciones: [Booleano que indica si están habilitadas],
  menuApps: [Booleano que indica si está habilitado],
  appname: [Nombre del sistema para los estilos],
  appMenu: [Identificador del menú del sistema, configurado en pruebasconfiguracion],
  TOKEN: {
    AUTORIZATION_URL: [URL de Autorización - login],
    CLIENTE_ID: [Id de cliente registrado en WSO2],
    RESPONSE_TYPE: [Tipo de respuesta del token],
    SCOPE: [Alcance de la solicitud],
    REDIRECT_URL: [URL de redirección],
    SIGN_OUT_URL: [URL de Cerrar Sesión - logout],
    SIGN_OUT_REDIRECT_URL: [URL de redirección después de cerrar sesión],
    AUTENTICACION_MID: [URL de API MID Autenticación],
  },
  parcels: {
    "@udistrital/root-config": [URL del bundle de este mismo root-config],
    "@udistrital/core-mf": [URL del microfrontend core (login, roles y menú)],
  },
};
```

### Ejecución del Proyecto

1. Clonar el repositorio:
   ```shell
   git clone https://github.com/udistrital/agora_root_mf.git
   ```
2. Acceder al directorio del repositorio clonado:
   ```bash
   cd agora_root_mf
   ```
3. Instalar las dependencias:
   ```bash
   pnpm install
   ```
4. Iniciar el Root:
   ```bash
   pnpm start
   ```
   La app queda disponible en `http://localhost:4200`.

### Ejecución Dockerfile

```shell
# No aplica
```

### Ejecución docker-compose

```shell
# No aplica
```

### Ejecución Pruebas

Pruebas unitarias

```shell
pnpm test
```

## Estado CI

```bash
# En desarrollo
```

## Modelo de Datos

```bash
# No aplica
```

Este repositorio no gestiona un modelo de datos propio: es un root-config de orquestación de microfrontends (single-spa). Los modelos de datos residen en los microfrontends y APIs consumidas (`core-mf` y los servicios de autenticación, roles y configuración que este integra).

## Licencia

This file is part of agora_root_mf.

agora_root_mf is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

agora_root_mf is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with agora_root_mf. If not, see https://www.gnu.org/licenses/.
