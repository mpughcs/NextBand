export default function NewRecordAvailable() {
    return (
        <div className="flex flex-col gap-4 justify-between p-2 w-full md:flex-row md:p-4 font-montserrat">
            <img
                src="/images/vinyl.webp"
                alt="New Record Available"
                className="mx-auto w-full md:w-1/3 md:mx-0"
            />
            <div className="w-full md:w-2/3">
                <h2 className="mb-2 text-xl md:text-2xl md:mb-4">
                    A-Rhythm Absolute
                </h2>

                <h2 className="mb-4 text-xl md:text-2xl md:mb-6">
                    <a
                        href="https://curationrecords.com/collections/cured052/products/a-rhythm-absolute-vinyl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Out now
                    </a> on Curation Records
                </h2>

                <span className="block mb-2 font-mono text-sm font-bold">
                    Featuring:
                </span>
                <ol className="gap-y-2 ml-4 text-sm font-bold list-decimal columns-1 md:columns-2 md:ml-6">
                    <li>Careers In Acting</li>
                    <li>Biograph</li>
                    <li>Darling</li>
                    <li>11,000 Volts</li>
                    <li>There's A Garden In You</li>
                    <li>He Cried (Tender Absolute)</li>
                    <li>Love Observations</li>
                    <li>Phantom Affair</li>
                    <li>Unwitting Boy</li>
                    <li>When Dreams Come True</li>
                </ol>
            </div>
        </div>
    )
}
