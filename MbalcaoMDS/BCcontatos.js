const BCcontatos = {
    // 1. João (Responsável Familiar)
    "345.678.901-23": {
        cidadao: { nome: "João Oliveira da Silva", cpf: "345.678.901-23" },
        govbr: {
            email: { valor: "mjdesouza@gmail.com", tipo: "Principal" },
            telefone: { valor: "(22) 99999-8888", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Rua das Flores, 324 - Centro", complemento: "AP 302", cidade: "Curitiba - PR", cep: "12345-321" }
        },
        bases: {
            emails: [
                "joao.silva_1980@yahoo.com.br", 
                "joao.oliveira@empresa.com.br",
                "joaozinho_oficial@hotmail.com"
            ],
            telefones: [
                "(22) 88888-9999", 
                "(11) 98765-4321", 
                "(41) 3333-2222", 
                "(21) 99999-9999"
            ],
            enderecos: [
                { logradouro: "Rua Eduardo de Morais, 45, APT 601 - Bairro Novo - Olinda - PE", cep: "53030-250" },
                { logradouro: "Av. Ipiranga, 200 - Centro Histórico de São Paulo, São Paulo - SP", cep: "01046-010" },
                { logradouro: "SIA Trecho 14 - SIA, Brasília - DF", cep: "71200-100" }
            ]
        }
    },

    // 2. Maria (Cônjuge)
    "456.789.012-34": {
        cidadao: { nome: "Maria Joana de Souza", cpf: "456.789.012-34" },
        govbr: {
            email: { valor: "maria.souza@gov.br", tipo: "Principal" },
            telefone: { valor: "(11) 97777-6666", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Rua das Flores, 324 - Centro", complemento: "AP 302", cidade: "Curitiba - PR", cep: "12345-321" }
        },
        bases: {
            emails: [
                "mariaj.souza@hotmail.com", 
                "mjoana.trabalho@contabilidade.com.br",
                "maria_joana_souza@gmail.com",
                "contato.maria@provedor.net"
            ],
            telefones: [
                "(11) 95555-4444", 
                "(11) 3222-1111",
                "(41) 99999-5555"
            ],
            enderecos: [
                { logradouro: "Rua Eduardo de Morais, 45, APT 601 - Bairro Novo - Olinda - PE", cep: "53030-250" },
                { logradouro: "Rua do Amparo, 183 - Amparo - Olinda - PE", cep: "53025-080" }
            ]
        }
    },

    // 3. Pedro (Filho)
    "567.890.123-45": {
        cidadao: { nome: "Pedro Oliveira da Silva", cpf: "567.890.123-45" },
        govbr: {
            email: { valor: "pedro.silva@gov.br", tipo: "Principal" },
            telefone: { valor: "(41) 98888-7777", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Rua das Flores, 324 - Centro", complemento: "AP 302", cidade: "Curitiba - PR", cep: "12345-321" }
        },
        bases: {
            emails: [
                "pedrinho_gameplay2010@gmail.com",
                "pedro.estudante@colegio.edu.br"
            ],
            telefones: [
                "(41) 91111-2222",
                "(41) 92222-3333",
                "(41) 93333-4444"
            ],
            enderecos: [
                { logradouro: "Rua Araújo, 329 - República, São Paulo - SP", cep: "01220-020" },
                { logradouro: "Av. Ipiranga, 200 - Centro Histórico de São Paulo, São Paulo - SP", cep: "01046-010" },
                { logradouro: "Av. Ipiranga, 200 - Lj 62 - República, São Paulo - SP", cep: "01046-925" },
                { logradouro: "Av. Ipiranga, 200 - Lj 46 - Centro Histórico de São Paulo, São Paulo - SP", cep: "01046-925" },
                { logradouro: "Av. Ipiranga, 200 - Centro Histórico de São Paulo, São Paulo - SP", cep: "01046-010" }
            ] 
        }
    },

    // 4. Ana (Filha - Com alerta de Revisão)
    "678.901.234-56": {
        cidadao: { nome: "Ana Oliveira da Silva", cpf: "678.901.234-56" },
        govbr: {
            email: { valor: "ana.oliveira@gov.br", tipo: "Principal" },
            telefone: { valor: "(41) 97777-8888", tipo: "Principal" },
            endereco: { tipo: "RESIDENCIAL", logradouro: "Av. Sete de Setembro, 1000 - Batel", complemento: "Casa", cidade: "Curitiba - PR", cep: "80230-000" }
        },
        bases: {
            emails: [
                "ana.silva99@yahoo.com",
                "aninha.oliveira@gmail.com",
                "ana.universidade@ufpr.br",
                "ana.estagio@empresa.com"
            ],
            telefones: [
                "(41) 94444-5555",
                "(41) 96666-7777",
                "(41) 3030-4040",
                "(41) 98888-1234"
            ],
            enderecos: [
                { logradouro: "SHC Norte, ERL - Norte, s/n - Loja 50, Brasília - DF", cep: "70853-400" },
                { logradouro: "Asa Sul CLS 111 Bloco A Loja 36 - Asa Sul, Brasília - DF", cep: "70374-510" },
                { logradouro: "St. de Clubes Esportivos Sul Trecho 2 - Asa Sul, Brasília - DF", cep: "70200-002" },
                { logradouro: "SIA Trecho 14 - SIA, Brasília - DF", cep: "71200-100" }
            ]
        }
    }
};