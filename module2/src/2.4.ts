{
  // generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Apurba",
    computer: {
      brand: "HP",
      model: "X-255ur",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Emilab",
      model: "X-255ur",
      display: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Yamaha {
    model: string;
    engine: string;
  }

  const richDeveloper: Developer<AppleWatch, Yamaha> = {
    name: "Apurba",
    computer: {
      brand: "Asus",
      model: "X-255ur",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Apple",
      model: "X-255ur",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "yamaha",
      engine: "100cc",
    },
  };
}
