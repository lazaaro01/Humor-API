export function gerarHumor(): string {
  const humores = [
    "Hoje você está com energia de Tech Lead supremo 😎",
    "Humor estável, igual o PostgreSQL sob baixa carga 🐘",
    "Você está com vibes de programar o dia inteiro 💻🔥",
    "Modo preguiça ativado, só se move por café ☕",
    "Criativo hoje! Ótimo momento para codar aquele recurso 🎨",
    "Um pouco cansado, mas ainda funcional… tipo Node em produção 😅",
    "Focado! Você está parecendo um Dev Senior agora 👨‍💻"
  ];

  return humores[Math.floor(Math.random() * humores.length)];
}