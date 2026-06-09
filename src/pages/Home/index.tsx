// Importação da estilização da página
import './index.css'

import { GrPersonalComputer } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { GiPlantRoots } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbSocial } from "react-icons/tb";
import { BsMegaphone } from "react-icons/bs";
import { IoIosCloudDownload } from "react-icons/io";
import { TbPigMoney } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import { MdCodeOff } from "react-icons/md";
import { FaMicroscope } from "react-icons/fa";

// Importação da imagem da logo
import logoEniacAcademy from '../../assets/logoEniacAcademy.png';


import { useDatabase } from '../../context/DatabaseContext';

import CardEstacao from '../../components/cardEstacao';

function Home() {

  

const {
  database
} = useDatabase();

const isLoading = Object.keys(database || {}).length === 0;

const icons = {
  DEV: <GrPersonalComputer size={40} className='card-icone-item' />,
  GIA: <LuBrainCircuit size={40} className='card-icone-item' />,
  ASG: <GiPlantRoots size={40} className='card-icone-item' />,
  GRH: <FaPeopleGroup size={40} className='card-icone-item' />,
  GPO: <GoProjectRoadmap size={40} className='card-icone-item' />,
  GQA: <AiOutlineFundProjectionScreen size={40} className='card-icone-item' />,
  CMD: <TbSocial size={40} className='card-icone-item' />,
  MKT: <BsMegaphone size={40} className='card-icone-item' />,
  CLD: <IoIosCloudDownload size={40} className='card-icone-item' />,
  GPF: <TbPigMoney size={40} className='card-icone-item' />,
  GPV: <MdSupportAgent size={40} className='card-icone-item' />,
  GET: <SiGooglescholar size={40} className='card-icone-item' />,
  GLC: <MdCodeOff size={40} className='card-icone-item' />,
  PCA: <FaMicroscope size={40} className='card-icone-item' />
};

  return (
    <section className='containerApp'>
      <header className='headerApp'>
        <div className='headerApp-logo'>
          <img src={logoEniacAcademy} alt="Logo Eniac Academy" className='headerApp-logo-item'/>
        </div>
      </header>

      <main className='conteudoApp'>
          <section className='conteudoApp-box'>
            <h1 className='conteudoApp-box-titulo'>Bem-vindo ao sistema</h1>
            <h1 className='conteudoApp-box-titulo-principal'>Gestão à Vista</h1>
            <p className='conteudoApp-box-descricao'>Escolha a baixo a estação que deseja visualizar <span className='text-color01'>projetos</span>, <span className='text-color02'>processos</span>, <span className='text-color03'>rotinas</span> e muito mais.</p>
            <div className='conteudoApp-box-divisor'></div>
          </section>

          <section className='conteudoApp-estacao'>
            <h2 className='conteudoApp-estacao-titulo'>Selecione a estação</h2>
            <article className='conteudoApp-estacao-cards'>
              {isLoading ? (
                <div className="loading-container">
                  <div className="spinner"></div>
                  <p className='loading-text'>Carregando as informações das estações...</p>
                </div>
              ) : (
                Object.values(database).map((station: any) => (
                  <CardEstacao
                    key={station.sigla}
                    sigla={station.sigla}
                    descricao={station.descricao}
                    totalProjetos={
                      station.projects?.filter(
                        (projeto: any) =>
                          projeto["Status do Projeto"] === "Em andamento"
                      ).length || 0
                    }
                    icone={icons[station.sigla as keyof typeof icons]}
                  />
                ))
              )}
            </article>
          </section>
      </main>

      <footer className='footerApp'>
        <p className='footerApp-texto'>&copy; Desenvolvido pela equipe de DEV (Desenvolvimento de Sistema)</p>
      </footer>
    </section>
  )
}

export default Home;
