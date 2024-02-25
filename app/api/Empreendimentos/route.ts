import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    try{

        return NextResponse.json([
            {
                type: "Edifício",
                slug: "Kyros",
                titulo: "Kyros",
                size: "47m²",
                vagas: "3 Vagas",
                simpleName: "Sto. André",
                imovel: "Prédio",
                quartos: 2,
                contrato: "Locação",
                img: "https://3d1.com.br/assets/imagens/galerias/d134_fachada-predio-edificio-fatima-henrique-lado-maquete-3d.jpg",
                description: "<p>More no bairro mais completo de Santo André, com liberdade para realizar suas atividades da forma como quiser: à pé, de bike, ônibus, trem ou carro. </p><br /><br /><p>Faça compras, passeie, estude ou vá ao trabalho com muito mais tranquilidade. </p><br /><br /><p>Este é o <strong>Eleganza Residenziale</strong>, o mais novo empreendimento da VillaSul Empreendimentos.</p>",
                endereco: "Rua Lauro Muller, 335 - Sto. André",
                enderecoMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.5318512902813!2d-46.5482798!3d-23.6926941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4236f028ca21%3A0x320db3d178d04a76!2sAv.%20Pereira%20Barreto%2C%2012%20-%20Baeta%20Neves%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009751-000!5e0!3m2!1spt-BR!2sbr!4v1708796778665!5m2!1spt-BR!2sbr",
                fotos: [{
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                },
                {
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                },
                {
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                }],
                progresso: [{
                    name: "Infra-estrutura",
                    percent: "95%"
                },
                {
                    name: "Estrutura",
                    percent: "25%"
                },
                {
                    name: "Alvenaria",
                    percent: "65%"
                },
                {
                    name: "Instalações",
                    percent: "80%"
                },
                {
                    name: "Revestimentos",
                    percent: "35%"
                },
                {
                    name: "Esquadrias",
                    percent: "50%"
                },
                {
                    name: "Pintura",
                    percent: "10%"
                },
                {
                    name: "Limpeza Final",
                    percent: "0%"
                }
                ],
              },
              {
                type: "Edifício",
                slug: "Vivre-Résidence",
                titulo: "Vivre Résidence",
                size: "72m²",
                vagas: "1 Vagas",
                quartos: 2,
                simpleName: "Sto. André",
                imovel: "Prédio",
                contrato: "Locação",
                img: "https://media.istockphoto.com/id/1411304340/pt/foto/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=qsYibygh6TlP__O9_6pnUPyXuA9rZ5Tiz6kggV6BxCE=",
                endereco: "Rua Lauro Muller, 335 - Sto. André",
                description: "<p>More no bairro mais completo de Santo André, com liberdade para realizar suas atividades da forma como quiser: à pé, de bike, ônibus, trem ou carro. </p><br /><br /><p>Faça compras, passeie, estude ou vá ao trabalho com muito mais tranquilidade. </p><br /><br /><p>Este é o <strong>Eleganza Residenziale</strong>, o mais novo empreendimento da VillaSul Empreendimentos.</p>",
                enderecoMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.5318512902813!2d-46.5482798!3d-23.6926941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4236f028ca21%3A0x320db3d178d04a76!2sAv.%20Pereira%20Barreto%2C%2012%20-%20Baeta%20Neves%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009751-000!5e0!3m2!1spt-BR!2sbr!4v1708796778665!5m2!1spt-BR!2sbr",
                fotos: [{
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                },
                {
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                },
                {
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                }],
                progresso: [{
                    name: "Infra-estrutura",
                    percent: "95%"
                },
                {
                    name: "Estrutura",
                    percent: "25%"
                },
                {
                    name: "Alvenaria",
                    percent: "65%"
                },
                {
                    name: "Instalações",
                    percent: "80%"
                },
                {
                    name: "Revestimentos",
                    percent: "35%"
                },
                {
                    name: "Esquadrias",
                    percent: "50%"
                },
                {
                    name: "Pintura",
                    percent: "10%"
                },
                {
                    name: "Limpeza Final",
                    percent: "0%"
                }
                ],
              },
              {
                type: "Edifício",
                slug: "Vila-Sul",
                titulo: "Vila Sul",
                size: "56m²",
                quartos: 2,
                simpleName: "Sto. André",
                vagas: "6 Vagas",
                imovel: "Prédio",
                contrato: "Locação",
                description: "<p>More no bairro mais completo de Santo André, com liberdade para realizar suas atividades da forma como quiser: à pé, de bike, ônibus, trem ou carro. </p><br /><br /><p>Faça compras, passeie, estude ou vá ao trabalho com muito mais tranquilidade. </p><br /><br /><p>Este é o <strong>Eleganza Residenziale</strong>, o mais novo empreendimento da VillaSul Empreendimentos.</p>",
                img: "https://img.freepik.com/fotos-gratis/foto-de-um-predio-alto-e-alto_181624-2214.jpg",
                endereco: "Rua Muller, 335 - Sto. André",
                enderecoMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.5318512902813!2d-46.5482798!3d-23.6926941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4236f028ca21%3A0x320db3d178d04a76!2sAv.%20Pereira%20Barreto%2C%2012%20-%20Baeta%20Neves%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009751-000!5e0!3m2!1spt-BR!2sbr!4v1708796778665!5m2!1spt-BR!2sbr",
                fotos: [{
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                },
                {
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                },
                {
                    description: "Imagem Vila Sul",
                    url: "/foto-de-um-predio-alto-e-alto_181624-2214.avif"
                }],
                progresso: [{
                    name: "Infra-estrutura",
                    percent: "95%"
                },
                {
                    name: "Estrutura",
                    percent: "25%"
                },
                {
                    name: "Alvenaria",
                    percent: "65%"
                },
                {
                    name: "Instalações",
                    percent: "80%"
                },
                {
                    name: "Revestimentos",
                    percent: "35%"
                },
                {
                    name: "Esquadrias",
                    percent: "50%"
                },
                {
                    name: "Pintura",
                    percent: "10%"
                },
                {
                    name: "Limpeza Final",
                    percent: "0%"
                }
                ],
              }
        ]
        , { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed emp acess" }, { status: 500 })
    }
}