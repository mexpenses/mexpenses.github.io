import { memo } from 'react';
import Link from "next/link";
import Head from "next/head";

const Policy = memo(() => {
    return (
        <>
            <Head>
                <title>Mexpenses - Política de privacidade</title>
            </Head>
            <div className="relative bg-white px-5 lg:px-24 my-14">
                <p className="text-base font-semibold leading-7 text-indigo-600">Última
                    atualização 26/05/2023</p>
                <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">Política
                    de Privacidade</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                    Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que
                    utilizam nosso site. Ao fazê-lo,
                    agimos na qualidade de controlador desses dados e estamos sujeitos às
                    disposições da Lei Federal n.
                    13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).
                </p>
                <p>
                    Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta
                    política de privacidade, que
                    contém informações importantes sobre:
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-gray-900">Quem deve utilizar nosso site: </strong>
                            Nosso site só deve ser utilizado por pessoas com mais de dezoito anos de idade. Sendo assim, crianças e
                            adolescentes não devem utilizá-lo.
                        </span>
                    </li>
                    <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-gray-900">Quais dados coletamos e o que fazemos com eles: </strong>
                            Nosso site coleta e utiliza alguns dados pessoais de nossos usuários, de acordo com o disposto nesta seção.
                        </span>
                    </li>
                    <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-gray-900">Dados coletados:</strong>
                            <ul className="list-disc px-5">
                                <li>Localização</li>
                                <li>Diagnóstico</li>
                                <li>Identificado­res</li>
                                <li>Informações de uso</li>
                                <li>Informações financeiras</li>
                                <li>Informações de contato</li>
                                <li>Informações confidenciais</li>
                                <li>Histórico de navegação da plataforma</li>
                            </ul>
                        </span>
                    </li>
                </ul>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">
                    Os dados fornecidos por nossos usuários são coletados com as seguintes finalidades:
                </h2>
                <p className="mt-6">
                    Utilizamos as informações coletadas com o objetivo de proporcionar uma experiência
                    personalizada, incluindo anúncios discretos que serão adicionados muito em breve,
                    juntamente com outras finalidades que são explicadas em detalhes a seguir.
                    As informações utilizadas para tais finalidades são processadas automaticamente por
                    nossos sistemas. No entanto, em alguns casos, também realizamos uma análise manual
                    para acessar e analisar essas informações.
                    Em determinadas situações, com o intuito de utilizar menos informações relacionadas
                    a usuários individuais, desidentificamos, agregamos ou anonimizamos as informações,
                    de forma que elas não possam identificá-lo(a). Utilizamos essas informações da mesma
                    maneira que as suas, conforme descrito nesta seção.
                </p>
                <h2 className="font-semibold text-gray-900 mt-4">Para promover a segurança, a proteção e
                    a integridade
                </h2>
                <p>Usamos as informações coletadas para proteger as pessoas e oferecer um produto
                    seguro.
                </p>
                <h2 className="font-semibold text-gray-900 mt-4">Para oferecer serviços de mensuração,
                    análise e negócios
                </h2>
                <p>Muitas pessoas contam com nosso Software para administrar suas contas pessoais e
                    empresariais.
                </p>
                <h2 className="font-semibold text-gray-900 mt-4">Para nos comunicar com você</h2>
                <p>Nós entramos em contato com as informações que você nos fornece, como as inseridas no
                    seu perfil.
                </p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Dados
                    sensíveis
                </h2>
                <p className="mt-6">
                    Não serão coletados dados sensíveis de nossos usuários, assim entendidos aqueles
                    definidos nos arts. 11 e seguintes
                    da Lei de Proteção de Dados Pessoais. Assim, não haverá coleta de dados sobre origem
                    racial ou étnica, convicção
                    religiosa, opinião política, filiação a sindicato ou a organização de caráter
                    religioso, filosófico ou político,
                    dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando
                    vinculado a uma pessoa natural.
                </p>
                <small>Estas são as maneiras como usamos suas informações:</small>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Coleta de dados
                    não previstos expressamente
                </h2>
                <p className="mt-6">
                    Eventualmente, outros tipos de dados não previstos expressamente nesta Política de
                    Privacidade poderão ser
                    coletados, desde que sejam fornecidos com o consentimento do usuário, ou, ainda, que
                    a coleta seja permitida com
                    fundamento em outra base legal prevista em lei.
                </p>
                <p>
                    Em qualquer caso, a coleta de dados e as atividades de tratamento dela decorrentes
                    serão informadas aos usuários do
                    site.
                </p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Compartilhamento
                    de dados pessoais com terceiros</h2>
                <p className="mt-6">
                    Nós não compartilhamos seus dados pessoais com terceiros. Apesar disso, é possível
                    que o façamos para cumprir
                    alguma determinação legal ou regulatória, ou, ainda, para cumprir alguma ordem
                    expedida por autoridade pública.
                </p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Por quanto tempo
                    seus dados pessoais serão armazenados?</h2>
                <p className="mt-6">
                    Os dados pessoais que coletamos serão armazenados e utilizados pelos seguintes
                    períodos de tempo:
                </p>
                <p>
                    Todos os respectivos dados continuarão armazenados normalmente por tempo
                    indeterminado.
                    Em caso de exclusão da conta do usuário os dados serão excluídos permanentemente.
                </p>
                <p>Os períodos informados não são superiores ao estritamente necessário, atendendo às
                    finalidades e às justificativas
                    legais para o tratamento dos dados.
                </p>
                <p>Vale dizer que, se houver alguma justificativa legal ou regulatória, os dados poderão
                    continuar armazenados ainda
                    que a finalidade para a qual foram coletados ou tenham sido tratados tenha se
                    exaurido.
                </p>
                <p>Uma vez finalizado o tratamento, observadas as disposições desta seção, os dados são
                    apagados ou anonimizados.
                </p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">
                    Bases legais para o tratamento de dados pessoais
                </h2>
                <p className="mt-6">Cada operação de tratamento de dados pessoais precisa ter um
                    fundamento jurídico, ou seja, uma base legal, que nada
                    mais é que uma justificativa que a autorize, prevista na Lei Geral de Proteção de
                    Dados Pessoais.
                </p>
                <p>Todas as Nossas atividades de tratamento de dados pessoais possuem uma base legal que
                    as fundamenta, dentre as
                    permitidas pela legislação. Mais informações sobre as bases legais que utilizamos
                    para operações de tratamento de
                    dados pessoais específicas podem ser obtidas a partir de nossos canais de contato,
                    informados ao final desta
                    Política.</p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900 mb-6">Direitos do
                    usuário</h2>
                <strong className="font-semibold text-gray-900">O usuário do site possui os seguintes
                    direitos, conferidos pela Lei de Proteção de Dados Pessoais:</strong>
                <ul className="list-decimal px-5">
                    <li>Confirmação da existência de tratamento;</li>
                    <li>Acesso aos dados;</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou
                        tratados em desconformidade com o
                        disposto na lei;
                    </li>
                    <li>Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante
                        requisição expressa, de acordo com a
                        regulamentação da autoridade nacional, observados os segredos comercial e
                        industrial;
                    </li>
                    <li>Eliminação dos dados pessoais tratados com o consentimento do titular, exceto
                        nos casos previstos em lei;
                    </li>
                    <li>Informação das entidades públicas e privadas com as quais o controlador realizou
                        uso compartilhado de dados;
                    </li>
                    <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as
                        consequências da negativa;
                    </li>
                    <li>Revogação do consentimento.</li>
                </ul>
                <p className="mt-6">É importante destacar que, nos termos da LGPD, não existe um direito
                    de eliminação de dados tratados com fundamento
                    em bases legais distintas do consentimento, a menos que os dados seja
                    desnecessários, excessivos ou tratados em
                    desconformidade com o previsto na lei.</p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Como o titular
                    pode exercer seus direitos</h2>
                <p className="mt-6">Para garantir que o usuário que pretende exercer seus direitos é, de
                    fato, o titular dos dados pessoais objeto da
                    requisição, poderemos solicitar documentos ou outras informações que possam auxiliar
                    em sua correta identificação,
                    a fim de resguardar nossos direitos e os direitos de terceiros. Isto somente será
                    feito, porém, se for
                    absolutamente necessário, e o requerente receberá todas as informações
                    relacionadas.</p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Medidas de
                    segurança no tratamento de dados pessoais</h2>
                <p className="mt-6">Empregamos medidas técnicas e organizativas aptas a proteger os
                    dados pessoais de acessos não autorizados e de
                    situações de destruição, perda, extravio ou alteração desses dados.</p>
                <p>Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais de
                    acessos não autorizados e de
                    situações de destruição, perda, extravio ou alteração desses dados.</p>

                <p>As medidas que utilizamos levam em consideração a natureza dos dados, o contexto e a
                    finalidade do tratamento, os
                    riscos que uma eventual violação geraria para os direitos e liberdades do usuário, e
                    os padrões atualmente
                    empregados no mercado por empresas semelhantes à nossa.</p>
                <p>Entre as medidas de segurança adotadas, destacamos as seguintes:</p>
                <ul className="list-decimal px-5">
                    <li>Acesso restrito às pessoas autorizadas;</li>
                    <li>Monitoramento regular dos sistemas e dos acessos;</li>
                    <li>Medidas de proteção contra ataques cibernéticos, como firewall e criptografia de
                        dados;
                    </li>
                    <li>Políticas internas de segurança da informação;</li>
                    <li>Limitação do acesso aos dados pessoais;</li>
                    <li>Contrato de confidencialidade com funcionários e prestadores de serviços;</li>
                    <li>Avaliações de segurança regulares nos sistemas.</li>
                </ul>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Reclamação a uma
                    autoridade de controle</h2>
                <p className="mt-6">Sem prejuízo de qualquer outra via de recurso administrativo ou
                    judicial, os titulares de dados pessoais que
                    se sentirem, de qualquer forma, lesados, podem apresentar reclamação à Autoridade
                    Nacional de Proteção de Dados.</p>
                <h2 className="mt-16 text-2xl font-medium tracking-tight text-gray-900">Como entrar em
                    contato conosco</h2>
                <p className="mt-6">Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade
                    ou sobre os dados pessoais que tratamos, entre
                    em contato com nosso Encarregado de Proteção de Dados Pessoais, por meio dos
                    seguintes canais:</p>
                <p className="mt-6">
                    <Link href="mailto:mexpenses.app@gmail.com">
                        <b className="flex items-center justify-start m-0 text-indigo-600 hover:text-indigo-500 font-medium cursor-pointer"
                           title="mexpenses.app@gmail.com">
                            <img
                                alt="E-mail"
                                src={"/assets/email.png"}
                                className="h-5 w-auto object-cover object-center"
                            />
                            &nbsp;Entrar em contato por e-mail
                        </b>
                    </Link>
                </p>
            </div>
        </>
    );
});

export default Policy;