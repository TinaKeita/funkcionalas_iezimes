function Translations() {
  const data = [
    { en: 'Feature', lv: 'Funkcionalitate, Fīča' },
    { en: 'Background', lv: 'Konteksts, Situācija' },
    { en: 'Rule', lv: 'Rule' },
    { en: 'Scenario', lv: 'Piemērs, Scenārijs' },
    { en: 'Scenario Outline', lv: 'Scenārijs pēc parauga' },
    { en: 'Examples', lv: 'Piemēri, Paraugs' },
    { en: 'Given', lv: '*Kad' },
    { en: 'When', lv: '*Ja' },
    { en: 'Then', lv: '*Tad' },
    { en: 'And', lv: '*Un' },
    { en: 'But', lv: '*Bet' },
  ];

  const tableStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: '14px',
    borderCollapse: 'collapse',
    width: '100%',
    maxWidth: '500px',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
  };

  return (
    <>
      <h2 style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>Gherkin termini</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Angļu valodā</th>
            <th style={headerStyle}>Latviešu valodā</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{item.en}</td>
              <td style={cellStyle}>{item.lv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Translations;
