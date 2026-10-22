# Entregável 4

Projeto em JavaScript com algoritmos de contagem, sequência de Fibonacci, máximo divisor comum (MDC), ordenação, identificação de números primos e somatório. Os testes automatizados são executados com Jest.

## Pré-requisitos

- Node.js instalado. A instalação inclui o npm.
- Terminal aberto na pasta `entregavel-4`, onde está o arquivo `package.json`.

Para conferir se Node.js e npm estão disponíveis, execute:

```powershell
node --version
npm --version
```

## Instalação

Na primeira execução, instale as dependências do projeto:

```powershell
npm install
```

Esse comando instala o Jest, usado nos testes, e o `prompt-sync`, usado pelos algoritmos com entrada interativa.

## Executar todos os testes

Na pasta `entregavel-4`, execute:

```powershell
npm test
```

O Jest procura os arquivos de teste dentro da pasta `tests` e apresenta o resultado no terminal. Para executar os testes em sequência, sem paralelismo, use:

```powershell
npm test -- --runInBand
```

Uma execução bem-sucedida informa que as suítes e os testes passaram. Se houver falhas, o Jest mostra o arquivo, o teste e a diferença entre o resultado esperado e o recebido.

## Executar um arquivo de teste

Para testar somente um algoritmo, informe o caminho do arquivo de teste:

```powershell
npm test -- --runTestsByPath tests/Mdc.test.js
```

Substitua `Mdc.test.js` por um dos arquivos disponíveis:

- `tests/Contagem.test.js`
- `tests/Fibonnaci.test.js`
- `tests/Mdc.test.js`
- `tests/Ordenacao.test.js`
- `tests/Primos.test.js`
- `tests/Somatorio.test.js`

Também é possível combinar a execução de um único arquivo com `--runInBand`:

```powershell
npm test -- --runInBand --runTestsByPath tests/Mdc.test.js
```

## Estrutura do projeto

- `funcoes/`: implementação dos algoritmos.
- `tests/`: testes automatizados dos algoritmos.
- `package.json`: dependências e comandos disponíveis.
- `package-lock.json`: versões instaladas das dependências.

## Observação sobre erros

As funções validam os argumentos recebidos. Entradas com tipo incorreto podem gerar `TypeError`; valores fora do domínio aceito podem gerar `RangeError`. Os testes incluem casos válidos, casos de borda e entradas inválidas para verificar esse comportamento.