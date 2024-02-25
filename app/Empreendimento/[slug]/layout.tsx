import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../../../app/globals.css';
import { OpenProvider } from '../../providers/modalProvider'
const inter = Inter({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', ], variable: '--Inter' }, );


interface Foto {
  description?: string;
  url?: string;
}

interface Progresso {
  name?: string;
  percent?: string;
}

export interface PropsGet {
  type?: string;
  slug?: string;
  titulo?: string;
  size?: string;
  vagas?: string;
  imovel?: string;
  simpleName?: number;
  quartos?: number;
  contrato?: string;
  img?: string;
  description?: string;
  endereco?: string;
  enderecoMaps?: string;
  fotos?: Foto[];
  progresso?: Progresso[];
}

export async function generateStaticParams() {
  const request = (await fetch('https://vilasul.vercel.app/api/Empreendimentos')).json();
  if(!request) return {}
  const posts = await request
  return posts.map((post: PropsGet) => ({
    type: post?.type,
    slug: post?.slug,
    titulo: post?.titulo,
    size: post?.size,
    vagas: post?.vagas,
    imovel: post?.imovel,
    quartos: post?.quartos,
    contrato: post?.contrato,
    img: post?.img,
    description: post?.description,
    endereco: post?.endereco,
    enderecoMaps: post?.enderecoMaps,
    fotos: [post?.fotos?.map((data) => {
        data?.description,
        data?.url
    })],
    progresso: [post?.progresso?.map((data) => {
      data?.name,
      data?.percent
    })]
  }))
}

export async function generateMetadata({ params }: any): Promise<Metadata> { 

  const slugMetadata = (await fetch('https://vilasul.vercel.app/api/Empreendimentos')).json() 
  if(!slugMetadata) return {}
  const data = await slugMetadata

  const slug = decodeURIComponent(params?.slug)
  const content = data.find((objeto: PropsGet) => objeto?.slug === slug.toString());
  return {
    title: content?.slug ? `Empreendimento Imobiliário : ${content?.slug}` : 'VilaSul - Empreendimentos Imobiliários',
    description: content?.description  ? content?.description : 'VilaSul - Empreendimentos Imobiliários',
    metadataBase: new URL('https://vilasul.vercel.app/'),
    robots: {
      index: true,
      googleBot: 'index, follow',
    },
    
    authors: [{
      name: 'Guilherme Luziac',
      url: 'https://www.linkedin.com/in/guilherme-carvalho-bispo/?originalSubdomain=br'
    },
    {
      name: 'Victor Basso Dev',
      url: 'www.linkedin.com/in/victor-basso-b3090a189'
    }  
    ],
    icons: {
      icon: '/faviicon.svg',
    },
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <OpenProvider key={0}>
        {children}
      </OpenProvider>

  );
}
