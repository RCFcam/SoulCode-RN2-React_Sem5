import { Container, Accordion, Button, Alert } from "react-bootstrap";

function Ajuda() {
    return (
        <main className="mt-4">
            <Container className="br">
                <h1>Ajuda</h1>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sobre o nosso Sistemas.</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, consequatur.
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