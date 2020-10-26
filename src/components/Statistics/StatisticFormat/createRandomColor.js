  
export default function createRandomColor() {
    const hexParts = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += hexParts[Math.floor(Math.random() * 16)];
    }
    return color;
  }