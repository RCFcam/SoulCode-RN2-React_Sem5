import { Container, Accordion, Button, Alert } from "react-bootstrap";

function Ajuda() {
    return (
        <main className="mt-4">
            <Container className="br">
                <h1>Ajuda</h1>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bem-vindo à sessão de Ajuda do nosso "Saquarema Surf Center", o seu site de surf em Saquarema!</Accordion.Header>
                            <Accordion.Body>
 Ajuda e Suporte . <br/>
Estamos aqui para garantir que você tenha a melhor experiência possível enquanto navega por nosso site e planeja sua próxima aventura de surf em Saquarema. Se você tiver dúvidas ou precisar de assistência, confira as informações abaixo:

Perguntas Frequentes
1. Como posso verificar as condições do mar em Saquarema?
Você pode verificar as condições atuais do mar, incluindo a altura das ondas, a direção do vento e a previsão do tempo, em nossa página de Previsão do Tempo. Atualizamos essas informações regularmente para que você esteja sempre informado.

2. Onde posso encontrar informações sobre as melhores praias para surfar em Saquarema?
Na nossa página de Praias, listamos as melhores praias de Saquarema para o surf, como Itaúna, Vila e Jaconé. Cada praia vem com uma descrição detalhada e dicas sobre as melhores condições para pegar boas ondas.

3. Vocês oferecem aulas de surf?
Sim! Oferecemos aulas de surf para todos os níveis, desde iniciantes até surfistas avançados. Você pode reservar sua aula diretamente em nossa página de Aulas de Surf. Nossos instrutores experientes estão prontos para ajudá-lo a melhorar suas habilidades e aproveitar ao máximo o surf em Saquarema.

4. Como posso entrar em contato com o suporte ao cliente?
Se você não encontrou a resposta para sua pergunta aqui, pode entrar em contato com nosso suporte ao cliente através do formulário de contato na nossa página de Contato. Estamos disponíveis para responder suas dúvidas e fornecer a assistência necessária.

5. Vocês têm recomendações de hospedagem em Saquarema?
Sim, temos uma lista de acomodações recomendadas na nossa página de Hospedagem. Desde pousadas charmosas até hotéis confortáveis, você encontrará opções para todos os gostos e orçamentos.

Dicas de Segurança
Respeite as Regras Locais: Sempre siga as regras de segurança e as instruções dos salva-vidas nas praias.
Verifique as Condições do Mar: Antes de entrar na água, verifique as condições do mar e certifique-se de que são adequadas para o seu nível de habilidade.
Use Equipamento Apropriado: Certifique-se de usar a prancha e o equipamento de surf adequados ao seu nível de experiência e às condições do mar.
Precisa de Mais Ajuda?
Se precisar de mais assistência, não hesite em nos contatar! Estamos aqui para garantir que sua experiência de surf em Saquarema seja inesquecível.
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Sobre a Empresa</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, consequatur.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button className="mt-1 me-1">Entre em contato</Button>
                <Button className="mt-1 me-1">Clique aqui</Button>
                <Button className="mt-1 me-1" variant="outline-danger">Denuncie aqui!</Button>
                <Button className="mt-1 me-1" variant="outline-success">Clique aqui</Button>
                <Alert className="mt-1"  variant="warning">Atenção! Estamos em manutenção.</Alert>

            </Container>
        </main>
    );
}

export default Ajuda;