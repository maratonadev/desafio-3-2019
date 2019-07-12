[![](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://cloud.ibm.com)
[![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)](https://developer.ibm.com/node/)
[![Slack](https://maratona-inviter.mybluemix.net/badge.svg)](https://ibm.biz/convite-slack)

# Desafio 03 | UniJÁ

* [Desafio](#desafio)
* [Avaliação](#avaliação)
* [Comece aqui](#comece-aqui)
* [Pré-requisitos](#pré-requisitos)
* [Treinamento do modelo](#treinamento-do-modelo)
    * [Credenciais do Language Translator e Visual Recognition](#credenciais-do-language-translator-e-visual-recognition)
* [Aplicação na nuvem](#aplicação-na-nuvem)
    * [Veja como configurar o IBM Continuous Delivery](#veja-como-configurar-o-ibm-continuous-delivery)
    * [Credenciais na aplicação](#credenciais-na-aplicação)
* [Submissão](#submissão)
* [Material de Apoio](#material-de-apoio)
* [Troubleshooting](#troubleshooting)
* [Dúvidas](#dúvidas)
* [PDF do Desafio](#pdf-do-desafio)
* [License](#license)

## Desafio

A UniJÁ deseja criar um professor de inglês virtual para ajudar os alunos a aprender o idioma.

A iniciativa visa criar um assistente onde o aluno possa interagir enviando textos e imagens para serem traduzidos afim de melhorar seu vocabulário. Os textos serão enviados no idioma português para serem traduzidos para o inglês. A imagem será enviada e, uma vez identificada pelo professor virtual, apresentará seu respectivo nome em inglês.

Para isto, o professor terá a sua disposição todo potencial dos serviços Watson.

Abaixo seguem alguns exemplos de interação entre os alunos e o professor virtual:
 
O aluno está com dúvidas sobre como ficaria a seguinte frase em inglês: “Onde fica o restaurante mais próximo?” Após ingressar esta frase no professor virtual, o mesmo identifica que o idioma da frase está em português e apresenta automaticamente a tradução: “Where’s the nearest restaurant?”.

O aluno tira uma foto de um objeto com seu celular e envia essa foto para o professor virtual. Após identificar o objeto contido na foto, o professor virtual apresenta em inglês o nome deste objeto.

Alguns detalhes importantes: 

Os alunos podem inserir palavras ou frases até um limite de 1024 caracteres.
As imagens enviadas pelos alunos possuem uma resolução mínima de 320x320 pixels.
Os alunos não vão interagir com o professor virtual utilizando frases com uma mistura de idiomas, como por exemplo “Eu não lembro where I parked my car”.
O professor virtual será capaz de identificar objetos no seguinte escopo: cadeira, copo e garrafa de água.
Somente uma imagem por vez pode ser enviada.

Para realizar esta atividade, aconselhamos que o participante utilize das APIs de tradução e classificação de imagens do Watson. Portanto, cada participante deve criar sua própria base de dados de imagens que será utilizada para criação do classificador. Lembrando que essas imagens devem passar previamente por um processo de curadoria e pré processamento. 

Curadoria é um processo que visa avaliar a qualidade das imagens que serão utilizadas na criação do classificador. Ela é importante para garantir que somente serão utilizadas imagens úteis a solução e também para evitar processamento e volumetria desnecessários.

A curadoria da base de imagens se faz necessária para que apenas as imagens dentro do escopo da solução do professor virtual sejam carregadas, evitando assim poluição nos dados. Este procedimento visa garantir a qualidade da classificação apresentada. Fique a vontade para realizar a curadoria da sua base de imagens da maneira que desejar.

O pré processamento das imagens é um processo no qual deve-se padronizar as imagens que irão ser utilizadas para treinamento do classificador para melhorar sua classificação. Um dos procedimentos de pré processamento é o de padronização da resolução (tamanho) de todas as imagens da base antes do treinamento. Fique a vontade para realizar o pré processamento das imagens da sua base de imagens da maneira que desejar.

Lembrando que o Watson Visual Recognition possui a capacidade de inserção de exemplos negativos na hora de treinamento do modelo customizado de classificação de imagens. Entre outros motivos, essa funcionalidade é útil para desambiguação de imagens.

## Avaliação

Os participantes terão que treinar um modelo de classificação de imagem com as 3 (três) classes solicitadas no Watson Visual Recognition. Posteriormente devem disponibilizar a API e o classifier ID para que a avaliação automática ocorra.

Desta forma o avaliador automático enviará as imagens de teste para o classificador criado e validará as respostas encontradas com os resultados já esperados. Para que o avaliador automático valide a classificação das imagens, as classes do classificador do Watson Visual Recognition devem ser nomeadas obrigatoriamente como: `chair`, `glass` e `water_bottle` (cadeira, copo e garrada de água em português).

De forma similar, os textos de testes em português serão enviadas para o API do Watson Language Translator e portanto, a API deste serviço também deve ser disponibilizada por cada participante. 

## Comece aqui

🚨 **MANDATÓRIO SEGUIR CADA ITEM ABAXO PARA SUBMETER O DESAFIO** 🚨

Para começar no **desafio 3**, você deve seguir item a item abaixo:

1. Leia atentamente o enunciado do [Desafio](#desafio) e a [Avaliação](#avaliação) (será cobrado apenas o que está escrito neles).
2. Veja os [Pré-requisitos](#pré-requisitos) para poder participar do Desafio.
3. Crie uma instância do [Language Translator](https://cloud.ibm.com/catalog/services/language-translator), em `Dallas`, e pegue o `IAM_APIKEY` do serviço, para configurar o `.env`, mais abaixo.
4. Crie uma instância de [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio), em `Dallas` e acesse a plataforma, clicando no botão "Get Started"
5. Faça o [treinamento do seu modelo de Visual Recognition](#treinamento-do-modelo) dentro da plataforma do `Watson Studio`.
6. Suba a aplicação na [IBM Cloud](#aplicação-na-nuvem), em `Dallas`, com o serviço do [IBM Continuous Delivery](https://cloud.ibm.com/catalog/services/continuous-delivery) (veja o passo-a-passo abaixo) e configure com as credenciais do `Language Translator`, `Visual Recognition` e da Maratona.
7. Submeta o seu desafio, clicando no botão "**SUBMETER DESAFIO**".
8. Pronto! Agora é só acompanhar no ranking (100+).

## Pré-requisitos

Você deverá cumprir os seguintes itens:

- Registrar na [Maratona Behind the Code](https://ibm.biz/maratona) e confirmar o e-mail de cadastro.
- Registrar na [IBM Cloud](https://ibm.biz/BdzsFc) e confirmar o e-mail de cadastro.

## Treinamento do modelo

Veja o vídeo abaixo de como treinar o seu modelo de Visual Recognition, no Watson Studio.

<div align="center">
    <a href="https://youtu.be/gM7aUQnE7n4">
        <img width="375" src="doc/source/images/Thumbnail.png">
    </a>
</div>

### Credenciais do Language Translator e Visual Recognition

Para pegar o `IAM_APIKEY` (ou, em alguns casos, `API Key` apenas), acesse o https://cloud.ibm.com/resources e veja na lista de `Service`, você encontrará todos os serviços provisionados na sua conta (incluindo o Watson Assistant e o Discovery, serviços dos desafios 1 e 2 respectivamente).

<div align="center">
    <br>
    <h2><b>Lista de recursos na conta</b></h2>
    <img width="750" src="doc/source/images/Resource%2001.png">
</div>

<div align="center">
    <br>
    <br>
    <h2><b>Language Translator</b></h2>
    <img width="750" src="doc/source/images/Language%20Translator%2001.png">
</div>

<div align="center">
    <br>
    <br>
    <h2><b>Visual Recognition</b></h2>
    <img width="750" src="doc/source/images/Visual%20Recognition%2001.png">
</div>

## Aplicação na nuvem

Para subir a aplicação na IBM Cloud, você deve clicar no botão abaixo para subir usando o IBM Continuous Delivery (também conhecido como Delivery Pipeline). **Você deve subir a sua aplicação em Dallas**.

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/maratonadev/desafio-3)

### Veja como configurar o IBM Continuous Delivery

1. Configure o `Toolchain Name` com `<maratona-id>-desafio3-behindthecode`, substituindo o `<maratona-id>` pelo seu ID da Maratona (Ex: 100001). Se você não souber, verifique no seu e-mail, usado no registro da Maratona, para pegar o seu ID.

2. Configure o `App name` com a mesmo valor usado no item 1.

3. Crie uma chave (de uso interno). Basta clicar em "Create" e depois clique em "Create" novamente. Espere um instante até carregar todas os dados. Se demorar muito (mais de 5 minutos), recarregue a página e faça novamente o passo 1 e 2. **Na parte superior, você pode deixar em Washington DC ou Dallas. Já na parte inferior (abaixo do item 2), é mandatório configurar a Região de Dallas**. 

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2001.png">
</div>

### Credenciais na aplicação

Clique em `Eclipse Orion Web IDE` para configurar a aplicação.

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2002.png">
</div>

Abaixo estão o passo-a-passo, **obrigatório**, para configurar a sua aplicação no Eclipse Orion Web IDE.

1. Abra o arquivo `.env` para colocar as credenciais do `Language Translator`, `Visual Recognition` e da `Maratona` (lembre-se de que é o mesmo código usado para indicar novos participantes na Maratona). Preencha com os dados, após o `=` (símbolo de igual).

```
# Credenciais para o Desafio 3
DESAFIO=3
MARATONA_ID=

# Language Translator
IAM_APIKEY_LANGUAGE_TRANSLATOR=

# Visual Recognition
IAM_APIKEY_VISUAL_RECOGNITION=
CLASSIFIER_ID=

```

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2003.png">
</div>

2. Abra o arquivo `manifest.yml` e altere o `<maratona-id>` com o seu ID da Maratona, o mesmo usado acima. Lembre-se: é mandatório ter a URL com o formato do `name`, apresentado abaixo.

```
applications:
- name: <seu-id>-desafio3-behindthecode
  memory: 256M
  instances: 1
  buildpack: sdk-for-nodejs
```

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2004.png">
</div>

Clique em `Create new launch configuration` e crie a configuração para a sua aplicação (que está sendo criada em *background*). `Launch Config Name`, `Application Name` e `Host` devem ter o mesmo nome, com o formato `<maratona-id>-desafio3-behindthecode`, igual nos itens anteriores. Clique em `SAVE` para salvar as configurações.

<div align="center">
    <img width="750" src="doc/source/images/Pipeline%2005.png">
    <img width="750" src="doc/source/images/Pipeline%2006.png">
</div>

Clique em `PLAY` (primeiro botão na imagem). Espere até ficar `verde` (com o status: `running`). Depois, clique em `Open` (terceiro botão na imagem). Vai abrir a sua aplicação, com as configurações implementadas.

<div align="center">
    <img width="375" src="doc/source/images/Pipeline%2007.png">
    <img width="375" src="doc/source/images/Pipeline%2008.png">
</div>

## Submissão

🚨 TESTE BASTANTE O SEU MODELO DE TREINAMENTO 🚨

Mande várias frases, para testar o `Language Translator`. Mande várias frases em `Português` e veja o retorno.

Suba uma imagem e aperte em `ANALYZE` para ver o retorno do `top_class` (ou a classe com a maior nível de confiança). Faça quantos testes forem necessários e, se precisar, treine e re-treine o seu modelo para melhorar cada vez mais. Quando se sentir confortável, faça a submissão do seu desafio. Lembre-se: **NÃO é possível submeter mais de uma vez**. Fique atento!

Através da aplicação na IBM Cloud (`https://<maratona-id>-desafio3-behindthecode.mybluemix.net`), você irá clicar no botão **SUBMETER DESAFIO**, preencher com o seu CPF e enviar para a avaliação final.

<div align="center">
    <img width="750" src="doc/source/images/App%2001.png">
</div>

FIQUEM LIGADOS NO ibm.biz/maratona PARA ACOMPANHAR O RANKING GERAL E O RANKING DO DESAFIO! FIQUE NA TORCIDA PARA ESTAR ENTRE OS MELHORES!

## Material de apoio

- [O que é a IBM Cloud e como subir a sua primeira aplicação na nuvem](https://medium.com/ibmdeveloperbr/o-que-%C3%A9-a-ibm-cloud-e-como-subir-a-sua-primeira-aplica%C3%A7%C3%A3o-na-nuvem-41bfd260a2b7?source=friends_link&sk=7944d2fe14aa940e9bade68ce0731ba0)

## Troubleshooting

1. No `Logs` da aplicação, apresentou um erro (em vermelho). O que pode ser? 

    Resposta: **Veja se você colocou as credenciais da Maratona, Language Translator e Visual Recognition no arquivo `.env` e se o arquivo `manifest.yml` está correto, conforme [descrito acima](#credenciais-na-aplicação). Veja se a sua aplicação está rodando na URL correta conforme [descrito acima](#submissão).**

## Dúvidas

Acesse o slack e mande a sua dúvida: [ibm.biz/convite-slack](https://ibm.biz/convite-slack).

## PDF do Desafio

> Baixe o PDF do desafio [aqui](doc/source/pdf/Storytelling.pdf).

## License

Copyright 2019 Maratona Behind the Code

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
