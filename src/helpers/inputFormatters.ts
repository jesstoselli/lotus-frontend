const formatDateOnInput = (value: string): string => {
  const dateArray = value.split('');
  const day = dateArray.slice(0, 2).join('');
  const month = dateArray.slice(2, 4).join('');
  const year = dateArray.slice(4, 9).join('');

  return `${day}/${month}/${year}`;
};

const formatPhoneNumberOnInput = (value: string): string => {
  const phoneArray = value.split('');

  const ddd = phoneArray.slice(0, 2).join('');
  const firstHalf = phoneArray.slice(2, 6).join('');
  const lastHalf = phoneArray.slice(6, 12).join('');

  return `(${ddd}) ${firstHalf}-${lastHalf}`;
};

const formatCPFOnInput = (value: string): string => {
  const cpfArray = value.split('');

  const firstPart = cpfArray.slice(0, 3).join('');
  const secondPart = cpfArray.slice(3, 6).join('');
  const thirdPart = cpfArray.slice(6, 9).join('');
  const digits = cpfArray.slice(9, 11).join('');

  return `${firstPart}.${secondPart}.${thirdPart}-${digits}`;
};

const formatCEPOnInput = (value: string): string => {
  const cepArray = value.split('');

  const firstPart = cepArray.slice(0, 5).join('');
  const digits = cepArray.slice(5, 9).join('');

  return `${firstPart}-${digits}`;
};

export {
  formatDateOnInput,
  formatPhoneNumberOnInput,
  formatCPFOnInput,
  formatCEPOnInput,
};
