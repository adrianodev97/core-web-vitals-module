import { Button } from '../components/Button'
import Desktop from '../assets/images/desktop-and-mobile.png'
import DynaPredict from '../assets/images/logo-dynapredict.png'
import SensorAs from '../assets/images/sensor-as.png'
import SensorHf from '../assets/images/sensor-hf.png'
import SensorTca from '../assets/images/sensor-tca.png'
import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <main>
        {/* Introduction Section */}
        <section className="introduction" id="introduction">
          <div className="introduction-content container">
            <div className="info">
              <h1>
                Solução <br />
                DynaPredict
              </h1>
              <div className="logo-block">
                <Image
                  className="logo"
                  width={190}
                  height={37}
                  src={DynaPredict}
                  alt="Logo DynaPredict"
                />
              </div>
            </div>
            <div className="image-block">
              <Image src={Desktop} width={912} height={743} alt="Desktop" />
            </div>
          </div>
        </section>

        {/* Sensors Section */}
        <section className="sensors" id="sensors">
          <div className="sensors-content container">
            <h2>Sensores para Manutenção Preditiva</h2>
            <p>
              Opções de sensores sem fio, ou DynaLoggers com sensores de
              vibração triaxial e temperatura embarcados, que comunicam por
              Bluetooth com o App mobile ou Gateway, registrando os dados
              monitorados em sua memória interna. Por conexão internet esses
              dados são centralizados na Plataforma DynaPredict Web para
              análise, prognóstico e tomada de decisão.
            </p>
            <Button
              link="https://dynamox.net/dynapredict/"
              classStyle="btn-primary"
            >
              Ver mais
            </Button>
            <div className="sensors-block">
              <div className="sensors-item">
                <div className="sensor-block">
                  <Image src={SensorTca} width={500} height={500} alt="TcA" />
                </div>
                <h3>TcA+</h3>
              </div>
              <div className="sensors-item">
                <div className="sensor-block">
                  <Image src={SensorAs} width={500} height={500} alt="AS" />
                </div>
                <h3>AS</h3>
              </div>
              <div className="sensors-item">
                <div className="sensor-block">
                  <Image src={SensorHf} width={500} height={500} alt="HF" />
                </div>
                <h3>HF</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  )
}
