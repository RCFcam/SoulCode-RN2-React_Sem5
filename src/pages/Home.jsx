import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ".//Home.css";

function Home() {
    return (
        <main>
            <h1>Saquarema Surf Center.</h1>
            <hr/>
            <section className="m-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img  className="mt-3 " variant="top" src="https://naturam.com.br/wp-content/uploads/2021/02/saquarema-rj.jpg" width="160"/>

                    <Card.Body>
                        <Card.Title> Praia de Itaúna</Card.Title>
                        <Card.Text>
                        Encontra-se a aproximadamente 2 km do centro de Saquarema, é conhecida como templo do surf. Tudo isso, porque as ondas dessa praia são perfeitas para o exercício do esporte..
                        </Card.Text>
                        <Button variant="primary">Venha Visitar! </Button>
                    </Card.Body>
                    
                </Card>
            </section>
            <section className="m-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img  className="mt-3 " variant="top" src="https://todepassagem.clickbus.com.br/wp-content/uploads/2023/01/saquarema-rj-to-de-passagem.jpg" width="160"/>

                    <Card.Body>
                        <Card.Title> Lagoa de Jaconé</Card.Title>
                        <Card.Text>
                        Um pouco distante do centro de Saquarema, a 13kms, encontra-se na divisa entre essa cidade e Maricá. É uma das lagoas mais conhecidas da cidade, porém não a mais visitada...
                        </Card.Text>
                        <Button variant="primary">Venha Visitar! </Button>
                    </Card.Body>
                    
                </Card>
          

            </section>
            <section className="m-4">
                <Card style={{ width: '18rem' }}>
                <Card.Img  className="mt-3 " variant="top" src="https://www.litoralnamidia.com.br/portal/wp-content/uploads/2019/12/ressaca-mar-saquarema-720x720.jpg" width="160"/>

                    <Card.Body>
                        <Card.Title> Praia da Vila </Card.Title>
                        <Card.Text>
                        Localizada no centro de Saquarema, a Praia da Vila tem mais ou menos 1 Km de extensão total.Com uma grande movimentação, as águas cristalinas esverdeadas dessa praia, são ótimas para quem pratica esportes como o surf, por exemplo, devido as suas ondas fortes.
                        </Card.Text>
                        <Button variant="primary">Venha Visitar! </Button>
                    </Card.Body>
                    
                </Card>
          

            </section>

            <footer>
                
            </footer>
        </main>
    );
}

export default Home;