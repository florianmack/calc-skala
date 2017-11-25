export interface KeyValue {
   key: number;
   value: string;
}

export interface GradeInfo {
   grade: string;
   descr: string[];
}

export const YEARS: KeyValue[] = [
   { key: 1, value: '1. Klasse' },
   { key: 2, value: '2. Klasse' },
   { key: 3, value: '3. Klasse' },
   { key: 4, value: '4. Klasse' }
];

export const GRADES: KeyValue[] = [
   { key: 4, value: '4.0' },
   { key: 3, value: '3.0' },
   { key: 2, value: '2.0' },
   { key: 1, value: '1.0' },
   { key: 0, value: '0.0' }
];

export const FINALGRADES: KeyValue[] = [
   { key: 0, value: 'Undefiniert' },
   { key: 1, value: 'Sehr gut' },
   { key: 2, value: 'Gut' },
   { key: 3, value: 'Befriedigend (V)' },
   { key: 4, value: 'Genügend (V)' },
   { key: 5, value: 'Befriedigend (G)' },
   { key: 6, value: 'Genügend (G)' },
   { key: 7, value: 'Nicht Genügend (G)' },
   { key: 8, value: 'Befriedigend' },
   { key: 9, value: 'Genügend' },
   { key: 10, value: 'Nicht Genügend' }
];

export const GRADEINFO_1_2: GradeInfo[] = [
   { grade: 'Sehr gut', descr: ['Mindestens zweimal eine 4.0 Bewertung - der Rest ist 3.0'] },
   { grade: 'Gut', descr: ['Mindestens dreimal 3.0 oder höher - höchstens einmal 2.0'] },
   {
      grade: 'Befriedigend', descr: [
         'Mindestens zweimal 2.0 - der Rest 3.0 oder höher',
         'Dreimal 2.0 - einmal 3.0 oder höher',
         'Viermal 2.0',
         'Einmal 1.0 - der Rest mindestens 3.0 oder höher'
      ]
   },
   {
      grade: 'Genügend', descr: [
         'Zweimal 1.0 - der Rest 2.0 oder höher',
         'Einmal 1.0 - der Rest mindestens 2.0 oder höher',
         'Einmal 0.0 - einmal 1.0 - Rest mindestens 2.0 oder höher',
         'Dreimal 1.0 - Rest mindestens 3.0 oder höher'
      ]
   },
   {
      grade: 'Nicht Genügend', descr: [
         'Die Hälfte der Aufgaben ist 0.0',
         'Einmal 0.0 - der Rest ist 1.0 oder höher',
         'Dreimal 1.0 - Rest niedriger als 3.0'
      ]
   }
];

export const GRADEINFO_3_4: GradeInfo[] = [
   { grade: 'Sehr gut', descr: ['Mindestens zweimal eine 4.0 Bewertung - der Rest ist 3.0'] },
   { grade: 'Gut', descr: ['Mindestens dreimal 3.0 oder höher - höchstens einmal 2.0'] },
   {
      grade: 'Befriedigend (V)', descr: [
         'Einmal 1.0 - der Rest mindestens 3.0 oder höher',
         'Zweimal 2.0 - der Rest mindestens 3.0 oder höher',
         'Dreimal 2.0 - der Rest mindestens 3.0 oder höher'
      ]
   },
   {
      grade: 'Genügend (V)', descr: [
         'Einmal 1.0 - der Rest mindestens 2.0 oder höher',
         'Viermal 2.0'
      ]
   },
   {
      grade: 'Befriedigend (G)', descr: [
         'Zweimal 1.0 - der Rest mindestens 2.0 oder höher',
         'Dreimal 1.0 - der Rest mindestens 3.0 oder höher',
         'Einmal 0.0 - der Rest mindestens 2.0 oder höher'
      ]
   },
   {
      grade: 'Genügend (G)', descr: [
         'Einmal 0.0 - der Rest mindestens 1.0 oder höher',
         'Dreimal 1.0 - Rest niedriger als 3.0'
      ]
   },
   { grade: 'Nicht Genügend (G)', descr: ['Die Hälfte der Aufgaben ist 0.0'] }
];
