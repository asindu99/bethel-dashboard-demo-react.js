import React, { useState } from 'react';

const TableWithMoreButton = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMoreButtonClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Add more data as needed
  ];

  return (
    <table className='text-white'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleMoreButtonClick(index)}>
                  More
                </button>
              </td>
            </tr>
            {selectedRow === index && (
              <tr className="menu-row">
                <td colSpan="3">
                  <div className="menu">
                    {/* Add your unique menu content here */}
                    <div className='absolute top-16 right-1 flex flex-col py-5 bg-gray-800/60 gap-y-4 w-[130px] items-start pl-2 rounded-md justify-center'>
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg fill="#ffffff" className='w-5 h-5' viewBox="0 0 32 32" id="Outlined" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Fill"> <path d="M25,22a4,4,0,0,0-3.26,1.69l-11-6.4A4,4,0,0,0,11,16a4.14,4.14,0,0,0-.1-.87L22,8.65A4,4,0,1,0,21,6a4.14,4.14,0,0,0,.1.87L10,13.35A4,4,0,1,0,7,20a4,4,0,0,0,2.66-1L21,25.6c0,.13,0,.26,0,.4a4,4,0,1,0,4-4ZM25,4a2,2,0,1,1-2,2A2,2,0,0,1,25,4ZM7,18a2,2,0,1,1,2-2A2,2,0,0,1,7,18ZM25,28a2,2,0,1,1,2-2A2,2,0,0,1,25,28Z"></path> </g> </g></svg>
                        </div>
                        <h3 className='text-white'>Share link</h3>
                      </div>
                      
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg fill="#ffffff" viewBox="0 0 32 32" className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path> </g></svg>            
                        </div>
                        <h3 className='text-white'>Rename</h3>
                      </div>
                      
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>            
                        </div>
                        <h3 className='text-white'>Remove</h3>
                      </div>
                      
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z" fill="#ffffff"></path> </g></svg>            
                        </div>
                        <h3 className='text-white'>Download</h3>
                      </div>
                      
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableWithMoreButton;
