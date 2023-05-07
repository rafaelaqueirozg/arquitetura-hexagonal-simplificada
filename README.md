# Arquitetura Hexagonal Simplificada

## Portas e Adaptadores
Seguem o princípio Inversão de Dependência do SOLID.

### O que é uma porta?
As portas são interfaces que definem como as camadas externas podem interagir com o domínio central. Isso ajuda a garantir que o domínio central seja independente de qualquer tecnologia específica, permitindo que ele seja facilmente alterado ou atualizado sem afetar as camadas externas.

**Resumo**: É a interface de contrato que diz o que é preciso para que uma funcionalidade / caso de uso funcione dentro da aplicação. 

### O que é um adaptador?
Os adaptadores são implementações concretas das portas, que permitem que as camadas externas interajam com o domínio central. Eles podem ser adaptadores de banco de dados, adaptadores de API, adaptadores de mensagens ou qualquer outro tipo de adaptador que seja necessário para se comunicar com o mundo externo.

É uma implementação concreta das portas.
