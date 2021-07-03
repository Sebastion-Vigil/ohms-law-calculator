# ohms-law-calculator

An Ohm's Law calculator app for electricians and other technicians in the field.

## MVP

- Fixed size w/mobile 1st in mind
- Technician can, using any two values, can determine quantity of any of four values:
  - Watts (P)
  - Amps (I)
  - Volts (E)
  - Resistance (OHMS) (R)
- UI Should be simple and self-explanatory
  - perhaps a bit of text to help user

### Brainstorm

- Functional components, props, functionality
- Calculator, Screen, Keyboard
- Calculator main engine
- Does project need any classes
- Generate markup in clean, organized manner

### flow of app (see console comments)

- user selected a value! Watts
- Calculator useEffect invoked
- Recording first user input Volts
- Calculator useEffect invoked
- Recording second user input Ohms
- Calculator useEffect invoked
- calculated user input! 3
- userInputVals in calculateUserInput: Volts Ohms

### ToDo ###
- See if any code can be easily simplified, i.e., helper functions etc.
- Implement basic toggle functionality for Keyboard in Screen
