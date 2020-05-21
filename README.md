# Dragons
![Unit Tests](https://github.com/menosprezzi/dragons/workflows/Unit%20Tests/badge.svg?branch=master)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Resumo
Esta é uma PWA desenvolvida em Angular e WebComponents.
Preferi a utilização do Angular pois como tecnologia ele oferece
um maior tooling na caixa para o desenvolvimento de um Web App, embora adicione
uma maior complexidade estrutural em um primeiro momento. Seus conceitos servem de base para
o desenvolvimento de grandes aplicações, oferecendo uma maior escalabilidade em um time diverso,
pois também possui uma vasta documentação própria, o que facilita
integração de novos desenvolvedores em um time com o entendimento da abordagem Angular.

> Frameworks are not tools for organizing your code. They are tools for organizing your mind.

## Arquitetura

Foi escolhido a abordagem [CBA](https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348),
agrupando os objetos conforme seu contexto, minimizando o acoplamento do código.

Utilizando de SCSS, foi levado em consideração as boas práticas de [BEM](http://getbem.com/naming/) para a nomenclatura de classes.
* Ex: [dragons-edit.component.scss](https://github.com/menosprezzi/dragons/blob/master/src/app/dragons/dragons-edit/dragons-edit.component.scss)

### Ferramentas
#### UI/UX
Escolhi utilizar de um pacote que tomei a iniciativa de desenvolver, junto ao [Eduardo Dusik](https://www.linkedin.com/in/eduardodusik).
Implementamos um Design System utilizando o [Stencil](https://stenciljs.com/), a tecnologia desenvolvida pelo time do [Ionic](https://ionicframework.com/) como uma solução para o desenvolvimento de WebComponents.
O Stencil é um compiler de WebComponents, e leva em consideração diversos fatores de usabilidade no seu desenvolvimento, como o LazyLoad de components, carregando os componentes utilizados em uma tela por demanda.
Estruturalmente, esse projeto foi criado com o conceito de [Atomic Design](http://atomicdesign.bradfrost.com/) em mente. Tudo isso facilita o desenvolvimento de uma biblioteca agnóstica a frameworks e reutilizável.
Porém, WebComponents não é uma bala de prata, mas está sendo um caso de sucesso onde se possui diversos produtos desenvolvidos com tecnologias e times diferentes, e em até produtos legados que utilizem de SSR em .NET MVC ou semelhantes.

#### Versionamento e CI/CD
Foi realizado o setup de CI utilizando os workflows do Github Actions. O Build e os Testes Unitários são executados mediante a ações de Merge e PR para a branch master. Aliás, sugiro este workflow de branches para estes projetos:
![Versionamento](https://github.com/menosprezzi/dragons/blob/master/.github/wiki/res/images/git-flow-chart.png)

### Considerações
Desenvolvendo com CBA em Angular podemos aprimorar o Tree-shake e LazyLoad das páginas, porém ([enquanto aguardamos o lançamento do Ivy](https://blog.angularindepth.com/angular-revisited-tree-shakable-components-and-optional-ngmodules-329a4629276d))
adicionar um módulo para cada Component muitas vezes pode ser chateante, ainda mais em grandes aplicações. Utilizar de [SCAM](https://medium.com/wishtack/your-angular-module-is-a-scam-b4136ca3917b) seria uma alternativa viável para reduzir arquivos repetitivos.

Muitas vezes não se faz necessário a utilização de libs para gerência de estado, como Redux ou Mobx, utilizando de [NgRx](https://ngrx.io/), por também adicionar novos conceitos e complexidade ao projeto.
O simples fato de utilizar [Observables para armazenar estado em Services](https://coryrylan.com/blog/angular-observable-data-services) já pode dar ganhos na reatividade da aplicação (quando bem estruturado).
Porém, poderia ser implementado utilizando de [um Schematics](https://github.com/angular-extensions/model), automatizando esse processo.
* Ex: [auth.service.ts](https://github.com/menosprezzi/dragons/blob/master/src/app/core/auth/auth.service.ts)

Manter os testes unitários é de grande importância, sempre realizando o Mock de objetos externos ao módulo.
* Ex: [dragons.service.spec.ts](https://github.com/menosprezzi/dragons/blob/master/src/app/dragons/dragons.service.spec.ts)

#### WebComponents
Pode paracer estranho algumas seções do código por conta da utilização de WebComponents:

Por utilizar de WebComponents, o Angular não sabe como acessar as interfaces de um Input customizado. Sendo assim, não foi possível a utilizacação do módulo `@angular/forms`,
o que complica na utilização das ferramentas de criação de formulários do Angular. Para isso, deveria ser desenvolvido diretivas que implementem a [AbstractControl](https://angular.io/api/forms/AbstractControl) e e entendam as APIs de cada Input, como [é feito pelo Ionic 4](https://github.com/ionic-team/ionic/tree/master/angular/src/directives).
Para contornar isso, foi utilizado de `ViewChild` para acessar os elementos e seus valores manualmente.
* Ex: [dragons-edit.component.ts](https://github.com/menosprezzi/dragons/blob/master/src/app/dragons/dragons-edit/dragons-edit.component.ts)
* Fonte: [using-web-components-in-angular-forms](https://coryrylan.com/blog/using-web-components-in-angular-forms)

Seria necessario também criar Services como Wrapper dos WebComponents de Controller (como o `ac-modal-controller`, responsável por fornecer a lógica de criação de Modals na tela),
como também [é feito pelo Ionic 4](https://github.com/ionic-team/ionic/tree/master/angular/src/providers).

Ambos pontos acima seriam de responsabilidade do próprio pacote, e não do projeto, para manter o reuso.
