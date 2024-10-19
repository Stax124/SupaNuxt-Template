# Installation

## Requirements

- Git
- Docker (with Docker Compose support)

### Git

#### Windows

You can download Git from the official website: [https://git-scm.com/](https://git-scm.com/)

#### Linux

You can install Git using the package manager of your distribution. For example, in Ubuntu you can run:

```bash
sudo apt install git
```

or Arch Linux:

```bash
sudo pacman -S git
```

### Docker

#### Windows

You can download Docker Desktop from the official website: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

#### Linux

Please follow installation instructions for individual distributions or install Docker Desktop (though I would not recommend it).

Example for Ubuntu:

::: warning
You need to log out and log back in to get the new group permissions.
:::

```bash
sudo apt install docker.io docker-compose-v2
sudo usermod -aG docker $USER
```
