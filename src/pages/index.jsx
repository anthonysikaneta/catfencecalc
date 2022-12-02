import Head from 'next/head'

import Form from '@/components/Form'
import CatFenceTable from '@/components/Table'
import { useRef, useState } from 'react'
import Invoice from '@/components/Invoice'

const fences = [
  {
    id: '1232323',
    unit: '240 inches',
    numPaddles: '12',
    inchesPerSection: '20',
    minPaddles: '12',
    millimeters: '6096.00',
    centimeters: '609.6',
    feet: '20.00',
    inches: '240',
  },
]

export default function Home({ listings }) {
  const [measurement, setMeasurement] = useState(0)
  const [measurementType, setMeasurementType] = useState('Inches')
  const [minPaddles, setMinPaddles] = useState(0)
  const [paddles, setPaddles] = useState(0)
  const [perSection, setPerSection] = useState(0)
  const ref = useRef()

  const changeMeasurement = (m) => {
    if (m.target.id === 'measurement-type') {
      setMeasurementType(m.target.value)
    } else {
      setMeasurement(m.target.value)
    }
  }

  return (
    <>
      <Head>
        <title>Cat Fence Calculator - Cat Fence Rollers by Oscillot.</title>
        <meta
          name="description"
          content="Cat-proofing your yard has long been considered too difficult... Until Now..."
        />
      </Head>
      <main>
        <div className="py-10">
          <Form
            measurement={measurement}
            measurementType={measurementType}
            minPaddles={minPaddles}
            paddles={paddles}
            perSection={perSection}
            ref={ref}
            updateMeasurement={changeMeasurement}
            updateQuantity={(p) => {
              setPaddles(p.target.value)
            }}
            updateInches={(i) => {
              const numInches = i.target.value
              const numPaddles = (measurement / numInches).toFixed(2)
              if (measurementType === 'Inches') {
                setPerSection(numInches)
                setPaddles(numPaddles)
                setMinPaddles(Math.floor(numPaddles))
              } else {
                alert('Units must be set to inches!')
              }
            }}
          />
          <div className="content" ref={ref}>
            <Invoice fences={fences} />
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {},
  }
}
