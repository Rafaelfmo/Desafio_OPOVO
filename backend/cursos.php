<?php
header('Content-Type: application/json');

// Dados simulados dos cursos
$cursos = [
    [
        'id' => 1,
        'nome' => 'Meninas e Mulheres no Esporte',
        'tags' => ['Livre', 'Bem-Viver'],
        'descricao' => 'O Esporte Delas é um projeto gratuito voltado ao empoderamento, inclusão e permanência de meninas e mulheres no esporte. O curso busca sensibilizar e capacitar profissionais, estudantes, gestores e a sociedade para criar ambientes esportivos mais inclusivos, enfrentando barreiras e estereótipos de gênero. A programação conta com lives, webinários, cartilhas digitais, programas de TV, conteúdos online e encontros com escolas, ampliando o debate e o alcance do tema.',
        'imagem' => 'https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/09/636x462-ed-1.png',
        'informacoes' => [
            'Carga Horária: 72 horas',
            'Conteúdo: 4 módulos',
            'Período de Acesso: 6 meses',
            'Modalidade: EAD'
        ],
        'ministrado_por' => 'Fundação Demócrito Rocha',
    ],
    [
        'id' => 2,
        'nome' => 'Letramento Racial na Arquitetura e Urbanismo',
        'tags' => ['Livre', 'Bem-Viver'],
        'descricao' => 'O letramento racial é uma iniciativa importante para profissionais liberais, gestores e colaboradores de qualquer empresa, pois não só educa as pessoas sobre o racismo estrutural na sociedade, como também mobiliza a todos(as) sobre seu papel no combate a ele. A partir do letramento racial, os profissionais são convidados a refletirem sobre como o antirracismo é uma responsabilidade de todos(as). Esse entendimento melhora as relações de trabalho e interpessoais, diminuindo o impacto dos casos de racismo nos escritórios e na carreira de profissionais negras e negros.',
        'imagem' => 'https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/09/636x462-lr.jpg',
        'informacoes' => [
            'Carga Horária: 72 horas',
            'Conteúdo: 4 módulos',
            'Período de Acesso: 6 meses',
            'Modalidade: EAD'
        ],
        'ministrado_por' => 'Fundação Demócrito Rocha',
    ],
    [
        'id' => 3,
        'nome' => 'Educação Ambiental para um Presente Sustentável',
        'tags' => ['Extensão', 'Bem-Viver'],
        'descricao' => 'Educação Ambiental para um Presente Sustentável é um curso de extensão gratuito, totalmente online, com 72 horas/aula, voltado para jovens e adultos interessados em compreender e agir diante dos desafios ambientais. Com linguagem acessível, videoaulas, podcasts, materiais de apoio e certificação pela Fundação Demócrito Rocha e pela Universidade Estadual do Ceará, o curso oferece conhecimentos e ferramentas para promover práticas sustentáveis em casa, na escola e na comunidade.',
        'imagem' => 'https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/08/verdejar-636x462-1.png',
        'informacoes' => [
            'Carga Horária: 72 horas',
            'Conteúdo: 4 módulos',
            'Período de Acesso: 6 meses',
            'Modalidade: EAD'
        ],
        'ministrado_por' => 'Fundação Demócrito Rocha',
    ],
    [
        'id' => 4,
        'nome' => 'Como Implementar a Política Municipal de Educação Ambiental',
        'tags' => ['Curta Duração', 'Tecnologia e Profissão'],
        'descricao' => 'O curso introdutório “Como Implementar e Fortalecer a Política Municipal de Educação Ambiental” oferece uma visão ampla sobre conceitos essenciais, desafios e estratégias para promover a Educação Ambiental de forma eficaz em sua cidade. Prepare-se para iniciar uma jornada de aprendizado que transformará a gestão ambiental municipal, envolvendo a comunidade e garantindo práticas sustentáveis. Seja agente de mudança rumo a um futuro mais consciente e sustentável.',
        'imagem' => 'https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/06/ambiental-636.jpg',
        'informacoes' => [
            'Carga Horária: 72 horas',
            'Conteúdo: 4 módulos',
            'Período de Acesso: 6 meses',
            'Modalidade: EAD'
        ],
        'ministrado_por' => 'Fundação Demócrito Rocha',
    ],
    [
        'id' => 5,
        'nome' => 'Bullying: conhecer para combater',
        'tags' => ['Curta Duração', 'Bem-Viver'],
        'descricao' => 'No curso introdutório “Bullying: Conhecer para Combater” você vai entender os conceitos fundamentais, os impactos negativos do bullying e aprender estratégias eficazes para reconhecer, prevenir e enfrentar essa realidade em escolas, famílias e comunidades. Este é o primeiro passo de uma jornada importante de conscientização e transformação social. Participe, fortaleça seu conhecimento e contribua para um ambiente mais seguro, inclusivo e respeitoso para todos. Juntos podemos fazer a diferença!',
        'imagem' => 'https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/06/bullying-636.jpg',
        'informacoes' => [
            'Carga Horária: 72 horas',
            'Conteúdo: 4 módulos',
            'Período de Acesso: 6 meses',
            'Modalidade: EAD'
        ],
        'ministrado_por' => 'Fundação Demócrito Rocha',
    ],
    [
        'id' => 6,
        'nome' => 'Gestão Fiscal Interfederativa',
        'tags' => ['Extensão', 'Negócios'],
        'descricao' => 'O Programa de Aceleração Ceará Mais Digital vai impulsionar 10 startups sediadas no Ceará, selecionadas por Chamada Pública, que estejam desenvolvendo soluções inovadoras para a gestão pública municipal. O foco está na gestão financeira e fiscal, além das áreas de educação, saúde, infraestrutura, conservação de bens públicos e saneamento. Independentemente do estágio de maturidade, essa é a oportunidade para transformar a administração pública com tecnologia, inovação e impacto social. Faça parte da revolução digital no Ceará.',
        'imagem' => 'https://fdr.org.br/uane/wp-content/uploads/sites/13/2025/06/gestao-636.jpg',
        'informacoes' => [
            'Carga Horária: 72 horas',
            'Conteúdo: 4 módulos',
            'Período de Acesso: 6 meses',
            'Modalidade: EAD'
        ],
        'ministrado_por' => 'Fundação Demócrito Rocha',
    ]
];

// Permitir CORS para o frontend
header('Access-Control-Allow-Origin: *');

// Verifica se foi passado um parâmetro id
if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $cursoEncontrado = null;
    foreach ($cursos as $curso) {
        if ($curso['id'] === $id) {
            $cursoEncontrado = $curso;
            break;
        }
    }
    if ($cursoEncontrado) {
        echo json_encode($cursoEncontrado);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Curso não encontrado']);
    }
    exit;
}

// Se não houver parâmetro, retorna todos
echo json_encode($cursos);