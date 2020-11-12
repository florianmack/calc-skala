export interface KeyValue {
   key: number;
   value: string;
}

export interface GradeInfo {
   grade: string;
   descr: string[];
}

export const CLASSIFICATION: KeyValue[] = [
   { key: 1, value: 'Standard AHS' },
   { key: 2, value: 'Standard' }
];

export const GRADES: KeyValue[] = [
   { key: 4, value: '4.0' },
   { key: 3, value: '3.0' },
   { key: 2, value: '2.0' },
   { key: 1, value: '1.0' },
   { key: 0, value: '0.0' }
];

export const FINALGRADES: KeyValue[] = [
   { key: 1, value: 'Sehr gut' },
   { key: 2, value: 'Gut' },
   { key: 3, value: 'Befriedigend' },
   { key: 4, value: 'Genügend' },
   { key: 5, value: 'Nicht Genügend' }
];

export const TEST_GRADEINFO_AHS: GradeInfo[] = [
   {
      grade: 'Sehr gut',
      descr: [
         'Mindestens zweimal eine 4.0 Bewertung - der Rest ist 3.0'
      ]
   },
   {
      grade: 'Gut',
      descr: [
         'Mindestens dreimal 3.0 oder höher - höchstens einmal 2.0'
      ]
   },
   {
      grade: 'Befriedigend',
      descr: [
         'Einmal 1.0 - der Rest mindestens 3.0 oder höher',
         'Zweimal 2.0 - der Rest mindestens 3.0 oder höher',
         'Dreimal 2.0 - der Rest mindestens 3.0 oder höher'
      ]
   },
   {
      grade: 'Genügend',
      descr: [
         'Einmal 1.0 - der Rest mindestens 2.0 oder höher',
         'Viermal 2.0'
      ]
   },
   {
      grade: 'Nicht Genügend',
      descr: [
         'Alle anderen Kombinationen'
      ]
   }
];

export const TEST_GRADEINFO_STD: GradeInfo[] = [
   {
      grade: 'Sehr gut',
      descr: [
         'Mindestens zweimal eine 4.0 Bewertung – der Rest ist 3.0',
         'Mindestens dreimal 3.0 oder höher - höchstens einmal 2.0',
         'Einmal 1.0 - der Rest mindestens 3.0 oder höher',
         'Zweimal 2.0 - der Rest mindestens 3.0 oder höher',
         'Dreimal 2.0 - der Rest mindestens 3.0 oder höher'
      ]
   },
   {
      grade: 'Gut',
      descr: [
         'Einmal 1.0 - der Rest mindestens 2.0 oder höher',
         'Viermal 2.0'
      ]
   },
   {
      grade: 'Befriedigend',
      descr: [
         'Zweimal 1.0 – der Rest mindestens 2.0 oder höher',
         'Dreimal 1.0 – der Rest mindestens 3.0 oder höher',
         'Einmal 0.0 – der Rest mindestens 2.0 oder höher'
      ]
   },
   {
      grade: 'Genügend',
      descr: [
         'Einmal 0.0 - einmal 1.0 – der Rest 2.0 oder höher',
         'Dreimal 1.0 – einmal 2.0 ',
         'Viermal 1.0'
      ]
   },
   {
      grade: 'Nicht Genügend',
      descr: [
         'Alle anderen Kombinationen'
      ]
   }
];

export const REPORT_GRADEINFO_AHS: GradeInfo[] = [
   {
      grade: 'Sehr gut',
      descr: [
         'Mindestens 50% 4.0, der Rest nicht weniger als 3.0',
         'Mehr als 50% 4.0, höchstens 7% 2.0, kein 1.0, kein 0.0'
      ]
   },
   {
      grade: 'Gut',
      descr: [
         'Mindestens 75% 3.0 oder 4.0, der Rest nicht weniger als 2.0',
         'Mehr als 75% 3.0 oder 4.0, höchstens 7% 1.0, kein 0.0'
      ]
   },
   {
      grade: 'Befriedigend',
      descr: [
         'Mindestens 50% 3.0 oder 4.0, der Rest nicht weniger als 2.0',
         'Mindestens 75% 3.0 oder 4.0, der Rest nicht weniger als 1.0',
         'Mehr als 75% 3.0 oder 4.0, höchstens 7% 0.0'
      ]
   },
   {
      grade: 'Genügend',
      descr: [
         'Mindestens 50% 3.0 oder 4.0, der Rest nicht weniger als 1.0',
         'Mindestens 75% 2.0 oder höher, Rest nicht weniger als 1.0',
         'Mehr als 75% 2.0 oder höher, höchstens 7% 0.0'
      ]
   },
   {
      grade: 'Nicht Genügend',
      descr: [
         'Alle anderen Kombinationen'
      ]
   }
];

export const REPORT_GRADEINFO_STD: GradeInfo[] = [
   {
      grade: 'Sehr gut',
      descr: [
         'Mindestens 50% 4.0, der Rest nicht weniger als 3.0',
         'Mehr als 50% 4.0, höchstens 7% 2.0, kein 1.0, kein 0.0',
         'Mindestens 75% 3.0 oder 4.0, der Rest nicht weniger als 2.0',
         'Mehr als 75% 3.0 oder 4.0, höchstens 7% 1.0, kein 0.0',
         'Mindestens 50% 3.0 oder 4.0, der Rest nicht weniger als 2.0',
         'Mindestens 75% 3.0 oder 4.0, der Rest nicht weniger als 1.0',
         'Mehr als 75% 3.0 oder 4.0, höchstens 7% 0.0'
      ]
   },
   {
      grade: 'Gut',
      descr: [
         'Mindestens 50% 3.0 oder 4.0, der Rest nicht weniger als 1.0',
         'Mindestens 75% 2.0 oder höher, Rest nicht weniger als 1.0',
         'Mehr als 75% 2.0 oder höher, höchstens 7% 0.0'
      ]
   },
   {
      grade: 'Befriedigend',
      descr: [
         'Mindestens 50% 2.0 oder höher, Rest nicht weniger als 1.0',
         'Mindestens 75% 2.0 oder höher'
      ]
   },
   {
      grade: 'Genügend',
      descr: [
         'Mindestens 75% 1.0 oder höher'
      ]
   },
   {
      grade: 'Nicht Genügend',
      descr: [
         'Alle anderen Kombinationen'
      ]
   }
];
