"use client";
import Link from 'next/link';
import Head from 'next/head';
import { BlueTextSmall, Container, List, ListItem, Paragraph, Title, Strong, OrderedList, Heading2, ContactLink, Icon, Section } from './styles';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Policy = () => {
    const body = useRef(null);
    const contentRef = useRef(null);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const checkComplete = () => {
            const completeElement = document.querySelector('.complete');
            if (completeElement) {
                setIsComplete(true);
            } else {
                setTimeout(checkComplete, 100);
            }
        };
        checkComplete();
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            gsap.set(contentRef.current, { y: '100%', overflow: 'hidden' });
        }
    }, []);

    useEffect(() => {
        if (contentRef.current && isComplete) {
            gsap.fromTo(contentRef.current, 
                { y: '100%' },
                {
                    y: '0%',
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: body.current,
                        start: 'top 60%',
                        once: true
                    }
                }
            );
        }
    }, [isComplete]);
    
    return (
        <Section ref={body}>
            <Head>
                <title>Mexpenses - Política de privacidade</title>
            </Head>
            <Container>
                <div style={{ transform: "translate(0, 100%)" }} ref={contentRef}>
                    <BlueTextSmall>Última atualização 26/05/2024</BlueTextSmall>
                    <Title>Política de Privacidade</Title>

                    <Paragraph mt="1.5rem" size="1.25rem">
                        Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).
                    </Paragraph>

                    <Paragraph color="#dcdcdc">
                        Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta política de privacidade, que contém informações importantes sobre:
                    </Paragraph>

                    <List>
                        <ListItem>
                            <span>
                                <Strong>Quem deve utilizar nosso site: </Strong>
                                Nosso site só deve ser utilizado por pessoas com mais de dezoito anos de idade. Sendo assim, crianças e adolescentes não devem utilizá-lo.
                            </span>
                        </ListItem>

                        <ListItem>
                            <span>
                                <Strong>Quais dados coletamos e o que fazemos com eles: </Strong>
                                Nosso site coleta e utiliza alguns dados pessoais de nossos usuários, de acordo com o disposto nesta seção.
                            </span>
                        </ListItem>

                        <ListItem>
                            <span>
                                <Strong>Dados coletados:</Strong>
                                <OrderedList>
                                    <li>Localização</li>
                                    <li>Diagnóstico</li>
                                    <li>Identificadores</li>
                                    <li>Informações de uso</li>
                                    <li>Informações financeiras</li>
                                    <li>Informações de contato</li>
                                    <li>Informações confidenciais</li>
                                    <li>Histórico de navegação da plataforma</li>
                                </OrderedList>
                            </span>
                        </ListItem>
                    </List>

                    <Heading2>Os dados fornecidos por nossos usuários são coletados com as seguintes finalidades:</Heading2>
                    <Paragraph mt="1.5rem">Utilizamos as informações coletadas com o objetivo de proporcionar uma experiência personalizada,
                        incluindo anúncios discretos que serão adicionados muito em breve, juntamente com outras finalidades que são explicadas
                        em detalhes a seguir. As informações utilizadas para tais finalidades são processadas automaticamente por nossos sistemas.
                        No entanto, em alguns casos, também realizamos uma análise manual para acessar e analisar essas informações.
                        Em determinadas situações, com o intuito de utilizar menos informações relacionadas a usuários individuais,
                        desidentificamos, agregamos ou anonimizamos as informações, de forma que elas não possam identificá-lo(a).
                        Utilizamos essas informações da mesma maneira que as suas, conforme descrito nesta seção.
                    </Paragraph>

                    <Heading2 mt="1rem">Para promover a segurança, a proteção e a integridade</Heading2>
                    <Paragraph>Usamos as informações coletadas para proteger as pessoas e oferecer um produto seguro.</Paragraph>

                    <Heading2 mt="1rem">Para oferecer serviços de mensuração, análise e negócios</Heading2>
                    <Paragraph>Muitas pessoas contam com nosso Software para administrar suas contas pessoais e empresariais.</Paragraph>

                    <Heading2 mt="1rem">Para nos comunicar com você</Heading2>
                    <Paragraph>Nós entramos em contato com as informações que você nos fornece, como as inseridas no seu perfil.</Paragraph>

                    <Heading2 mt="4rem">Dados sensíveis</Heading2>
                    <Paragraph mt="1.5rem">Não serão coletados dados sensíveis de nossos usuários, assim entendidos aqueles definidos nos
                        arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim, não haverá coleta de dados sobre origem racial
                        ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso,
                        filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico,
                        quando vinculado a uma pessoa natural.
                    </Paragraph>

                    <Paragraph as="small" color="#bdbdbd">Estas são as maneiras como usamos suas informações:</Paragraph>

                    <Heading2 mt="4rem">Coleta de dados não previstos expressamente</Heading2>
                    <Paragraph mt="1.5rem">Eventualmente, outros tipos de dados não previstos expressamente nesta Política de Privacidade
                        poderão ser coletados, desde que sejam fornecidos com o consentimento do usuário, ou, ainda, que a coleta
                        seja permitida com fundamento em outra base legal prevista em lei.
                    </Paragraph>

                    <Paragraph>Em qualquer caso, a coleta de dados e as atividades de tratamento dela decorrentes serão informadas aos usuários do site.</Paragraph>

                    <Heading2 mt="4rem">Compartilhamento de dados pessoais com terceiros</Heading2>
                    <Paragraph mt="1.5rem">Nós não compartilhamos seus dados pessoais com terceiros. Apesar disso, é possível que o façamos para cumprir
                        alguma determinação legal ou regulatória, ou, ainda, para cumprir alguma ordem expedida por autoridade pública.
                    </Paragraph>

                    <Heading2 mt="4rem">Por quanto tempo seus dados pessoais serão armazenados?</Heading2>
                    <Paragraph mt="1.5rem">Os dados pessoais que coletamos serão armazenados e utilizados pelos seguintes períodos de tempo:</Paragraph>
                    <Paragraph>
                        Todos os respectivos dados continuarão armazenados normalmente por tempo indeterminado. Em caso de exclusão da conta
                        do usuário os dados serão excluídos permanentemente.
                    </Paragraph>
                    <Paragraph>
                        Os períodos informados não são superiores ao estritamente
                        necessário, atendendo às finalidades e às justificativas legais para o tratamento dos dados.
                    </Paragraph>
                    <Paragraph>
                        Vale dizer que, se houver alguma justificativa legal ou regulatória, os dados poderão continuar armazenados ainda que a finalidade
                        para a qual foram coletados ou tenham sido tratados tenha se exaurido.
                    </Paragraph>
                    <Paragraph>
                        Uma vez finalizado o tratamento, observadas as disposições desta seção, os dados são apagados ou anonimizados.
                    </Paragraph>
                    <Heading2 mt="4rem">Bases legais para o tratamento de dados pessoais</Heading2>
                    <Paragraph mt="1.5rem">
                        Cada operação de tratamento de dados pessoais precisa ter um fundamento jurídico, ou seja, uma base legal,
                        que nada mais é que uma justificativa que a autorize, prevista na Lei Geral de Proteção de Dados Pessoais.
                    </Paragraph>
                    <Paragraph>
                        Todas as Nossas atividades de tratamento de dados pessoais possuem uma base legal que as fundamenta, dentre as permitidas pela legislação.
                        Mais informações sobre as bases legais que utilizamos para operações de tratamento de dados pessoais específicas
                        podem ser obtidas a partir de nossos canais de contato, informados ao final desta Política.
                    </Paragraph>

                    <Heading2 mt="4rem" mb="1.5rem">Direitos do usuário</Heading2>
                    <Strong>O usuário do site possui os seguintes direitos, conferidos pela Lei de Proteção de Dados Pessoais:</Strong>
                    <OrderedList>
                        <li>Confirmação da existência</li>
                        <li>Acesso aos dados</li>
                        <li>Correção de dados</li>
                        <li>Anonimização</li>
                        <li>Portabilidade dos dados</li>
                        <li>Eliminação dos dados</li>
                        <li>Informação das entidades</li>
                        <li>Informação sobre a possibilidade</li>
                        <li>Revogação do consentimento</li>
                    </OrderedList>

                    <Paragraph mt="1.5rem">
                        É importante destacar que, nos termos da LGPD, não existe um direito de eliminação de dados tratados com fundamento
                        em bases legais distintas do consentimento, a menos que os dados seja desnecessários,
                        excessivos ou tratados em desconformidade com o previsto na lei.
                    </Paragraph>

                    <Heading2 mt="4rem">Como o titular pode exercer seus direitos</Heading2>
                    <Paragraph mt="1.5rem">
                        Para garantir que o usuário que pretende exercer seus direitos é, de fato, o titular dos dados pessoais objeto da
                        requisição, poderemos solicitar documentos ou outras informações que possam auxiliar em sua correta identificação,
                        a fim de resguardar nossos direitos e os direitos de terceiros. Isto somente será feito, porém, se for absolutamente
                        necessário, e o requerente receberá todas as informações relacionadas.
                    </Paragraph>

                    <Heading2 mt="4rem">Medidas de segurança no tratamento de dados pessoais</Heading2>
                    <Paragraph mt="1.5rem">
                        Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de
                        situações de destruição, perda, extravio ou alteração desses dados.
                    </Paragraph>
                    <Paragraph>
                        Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e
                        de situações de destruição, perda, extravio ou alteração desses dados.
                    </Paragraph>
                    <Paragraph>
                        As medidas que utilizamos levam em consideração a natureza dos dados, o contexto e a finalidade do tratamento,
                        os riscos que uma eventual violação geraria para os direitos e liberdades do usuário, e os padrões
                        atualmente empregados no mercado por empresas semelhantes à nossa.
                    </Paragraph>
                    <Paragraph>Entre as medidas de segurança adotadas, destacamos as seguintes:</Paragraph>
                    <OrderedList>
                        <li>Acesso restrito</li>
                        <li>Monitoramento</li>
                        <li>Proteção contra ataques</li>
                        <li>Políticas internas</li>
                        <li>Limitação do acesso</li>
                        <li>Contrato de confidencialidade</li>
                        <li>Avaliações de segurança</li>
                    </OrderedList>

                    <Heading2 mt="4rem">Reclamação a uma autoridade de controle</Heading2>
                    <Paragraph mt="1.5rem">
                        Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, os titulares de dados pessoais que se
                        sentirem, de qualquer forma, lesados, podem apresentar reclamação à Autoridade Nacional de Proteção de Dados.
                    </Paragraph>

                    <Heading2 mt="4rem">Como entrar em contato conosco</Heading2>
                    <Paragraph mt="1.5rem">
                        Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos,
                        entre em contato com nosso Encarregado de Proteção de Dados Pessoais, por meio dos seguintes canais:
                    </Paragraph>

                    <Paragraph mt="1.5rem">
                        <Link href="mailto:mexpenses.app@gmail.com">
                            <ContactLink>
                                <Icon fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </Icon>
                                Entrar em contato por e-mail
                            </ContactLink>
                        </Link>
                    </Paragraph>
                </div>
            </Container>
        </Section>
    )
}

export default Policy;