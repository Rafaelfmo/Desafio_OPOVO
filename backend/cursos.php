<?php
header('Content-Type: application/json');

// Dados simulados dos cursos
$cursos = [
    [
        'id' => 1,
        'nome' => 'Curso de Administração',
        'descricao' => 'Aprenda sobre gestão, liderança e empreendedorismo.',
        'imagem' => 'https://uane.edu.br/imagens/adm.jpg'
    ],
    [
        'id' => 2,
        'nome' => 'Curso de Direito',
        'descricao' => 'Formação completa em Direito, ética e cidadania.',
        'imagem' => 'https://uane.edu.br/imagens/direito.jpg'
    ],
    [
        'id' => 3,
        'nome' => 'Curso de Enfermagem',
        'descricao' => 'Capacitação em saúde, cuidado e humanização.',
        'imagem' => 'https://uane.edu.br/imagens/enfermagem.jpg'
    ]
];

echo json_encode($cursos);