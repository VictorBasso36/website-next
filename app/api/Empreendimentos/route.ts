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
                imovel: "Prédio",
                quartos: 2,
                contrato: "Locação",
                img: "https://3d1.com.br/assets/imagens/galerias/d134_fachada-predio-edificio-fatima-henrique-lado-maquete-3d.jpg",
                description: "",
                endereco: "Rua Lauro Muller, 335 - Sto. André",
                enderecoMaps: "iframe maps",
                fotos: [{
                    description: "",
                    url: ""
                },
                {
                    description: "",
                    url: ""
                },
                {
                    description: "",
                    url: ""
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
                imovel: "Prédio",
                contrato: "Locação",
                img: "https://media.istockphoto.com/id/1411304340/pt/foto/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=qsYibygh6TlP__O9_6pnUPyXuA9rZ5Tiz6kggV6BxCE=",
                endereco: "Rua Lauro Muller, 335 - Sto. André",
                description: "",
                enderecoMaps: "iframe maps",
                fotos: [{
                    description: "",
                    url: ""
                },
                {
                    description: "",
                    url: ""
                },
                {
                    description: "",
                    url: ""
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
                vagas: "6 Vagas",
                imovel: "Prédio",
                contrato: "Locação",
                img: "https://img.freepik.com/fotos-gratis/foto-de-um-predio-alto-e-alto_181624-2214.jpg",
                endereco: "Rua Muller, 335 - Sto. André",
                fotos: [{
                    description: "",
                    url: ""
                },
                {
                    description: "",
                    url: ""
                },
                {
                    description: "",
                    url: ""
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