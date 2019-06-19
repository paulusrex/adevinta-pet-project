npx @s-ui/studio run-all npm install

# Activar el servidor de desarrollo

npm run dev movie/search -- --link-package=../frontend-mv--domain

# Para activar el Windows Linux Subsystem

Abrir el PowerShell en modo administrador

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Ir a la Microsoft Store y bajar Ubuntu

Iniciarlo y dejar que complete sus operaciones
Elegir un nombre de usuario y contraseña para Ubuntu

Nos saldrá después un terminal

Ejecutar lo siguiente para instalar nodejs, npm y npx

```
$ sudo apt-get install curl python-software-properties
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install nodejs -y
$ sudo npm i -g npx
```

Para ir a donde tengais el repositorio. El disco duro se monta el /mnt/c

```
$ cd /mnt/c/Users/<...lo que sea...>/adevinta/frontend-mv--uilib-components
```

Para levantar el servidor de desarrollo

```
$ npm run dev movies/search -- --link-package=../frontend-mv--domain/ --link-all
```