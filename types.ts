
export enum AppState {
  INTRO = 'INTRO',
  PROPOSAL = 'PROPOSAL',
  CELEBRATION = 'CELEBRATION',
  EMOTION_REFLECT = 'EMOTION_REFLECT',
  PERSONA_PICKER = 'PERSONA_PICKER',
  DATE_PICKER = 'DATE_PICKER',
  BIRTHDAY_GIFT = 'BIRTHDAY_GIFT',
  THE_PROMISE = 'THE_PROMISE',
  PERSONAL_REVEAL = 'PERSONAL_REVEAL',
  FINAL = 'FINAL'
}

export interface UserResponseData {
  emotion: string;
  oneWord: string;
  character: string;
  favLine: string;
  selectedDate: string;
  birthdayGift: string;
  neverChange: string[];
  lookingForward: string;
  boundaries: string;
}
