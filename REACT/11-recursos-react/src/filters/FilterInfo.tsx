import { ChangeEvent, useMemo, useState } from 'react';
import { documentsValues, typesDocumentsValues } from '../data';

export const FilterInfo = () => {
    const [searchText, setSearchText] = useState('');
    const [typeDocumentsValues, setTypeDocumentsValues] = useState<string[]>([]);
    const [matchCase, setMatchCase] = useState(true);
  
    const filterDocuments = useMemo(() => {
      const regexAll = new RegExp(`${searchText}`, 'i');
      const regexMatch = new RegExp(`\\b${searchText}\\b`, 'i');
      let documentsToFilter = documentsValues;
  
      // Filtrar por tipo de documento
      if(typeDocumentsValues.length > 0){
        documentsToFilter = documentsToFilter.filter(({ type }) => typeDocumentsValues.includes(type))
      }
  
      if(matchCase) {
        documentsToFilter = documentsToFilter.filter(document => regexAll.test(document.title) || regexAll.test(document.title))
      }else {
        documentsToFilter = documentsToFilter.filter(document => regexMatch.test(document.description) || regexMatch.test(document.description))
      }
  
      return documentsToFilter;
    }, [documentsValues, searchText, matchCase, typeDocumentsValues]);

    const documentsShow = useMemo(() => searchText.length > 0 ||  typeDocumentsValues.length > 0 ?  filterDocuments : documentsValues, [filterDocuments, searchText.length, typeDocumentsValues.length])

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        if(typeDocumentsValues.includes(event.target.value)){
          setTypeDocumentsValues(typeDocumentsValues.filter(type => type !== event.target.value))
          return;
        }
    
        setTypeDocumentsValues([...typeDocumentsValues, event.target.value])
    }

    return (
      <div className='w-full md:w-11/12 m-auto'>
        <div className="flex items-center w-full bg-white rounded-full shadow-md border border-gray-700">
            <input
                type="text"
                className="flex-grow px-5 py-2 text-gray-400 bg-transparent focus:outline-none rounded-l-full"
                placeholder={'Buscar...'}
                name={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
            <button className="p-1 bg-slate-100 rounded-full mr-2">
                <i className="text-gray-600 icon icon-vpro-search w-full h-full"></i>
            </button>
        </div>
        <button className='bg-blue-200 mx-2 p-4 my-4' onClick={() => setMatchCase(true)}>Buscar en cualquier lugar</button>
        <button className='bg-blue-200 mx-2 p-4 my-4' onClick={() => setMatchCase(false)}>Buscar la palabra especifica</button>
        <div className="lg:grid gap-5 lg:grid-cols-12 order-1 h-full mt-5">
        <div className="bg-white mb-6 rounded-lg lg:col-span-3 p-3 sticky z-10 top-16 order-2 self-start shadow-md lg:block">
            <div className="p-3 bg-white sticky border-b border-solid last:border-none">
                <p className="font-bold mb-06">Tipo</p>
                <div className="max-h-28 z-10 overflow-hidden overflow-y-scroll visible">
                    {
                        typesDocumentsValues.map(({ id, name, value }) => (
                        <div className="table text-sm leading-none mb-2 pr-2" key={id}>
                            <input
                            id={`check-0-${id}`}
                            className="mr-1"
                            type="checkbox"
                            value={value}
                            onChange={changeValue}
                            /><label htmlFor={`check-0-${id}`} className="leading-1 align-middle table-cell">{ name }</label>
                        </div>
                        ))
                    }
                </div>
                </div>
            </div>
            <div className="lg:col-span-9">
                <div className="app-container">
                <h2 className="mb-5 pb-2 border-b border-solid border-light-400 font-bold text-lg">
                    <p className="capitalize">Mis Documentos</p>
                </h2>
                <div className="mb-5">
                    <div className='pagination-container'>
                    <div className="col-span-12">
                        <div className="space-y-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4 items-center justify-center xl:grid-cols-4">
                        { documentsShow.map(({ id, title, description, type }) => (
                            <div key={id}>
                                <h3>{title}</h3>
                                <h3>{description}</h3>
                                <h3>{type}</h3>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
}