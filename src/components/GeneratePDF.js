import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const GeneratePdf = ({ html }) => {
  const generatePDF = () => {
    const doc = new jsPDF()
    autoTable(doc, { html: '#text' })
    doc.output('dataurlnewwindow')
    doc.save('table-goodness.pdf')
  }

  return (
    <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
      <button
        onClick={generatePDF}
        type="submit"
        className="w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
      >
        Generate PDF
      </button>
      <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
        This will generate a document with all the conversions and pricing
        information.
      </p>
    </div>
  )
}

export default GeneratePdf
