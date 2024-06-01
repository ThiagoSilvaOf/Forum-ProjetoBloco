import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';

describe("PublicationsSection", () => {
  test("Componente renderizando corretamente", async () => {
  
    const testData = [
      {
        username: "alice123",
        texto: "Hoje é um ótimo dia para aprender algo novo! #Aprendizado #Motivação",
        data_publicacao: "04/07/2024 ás 08:30",
        curtidas: 15,
        comentarios: 8,
        lista_comentarios: [
          {
            usuario: "bob456",
            comentario: "Concordo! Nunca é tarde para aprender."
          },
          {
            usuario: "carol789",
            comentario: "Verdade, Alice! Inspiração para o dia."
          }
        ]
      }
    ];
    
    render(<Card publicacoes={testData} />);
    
    expect(await screen.findByText("alice123")).toBeInTheDocument();
    expect(await screen.findByText("04/07/2024 ás 08:30")).toBeInTheDocument();
  });
});


