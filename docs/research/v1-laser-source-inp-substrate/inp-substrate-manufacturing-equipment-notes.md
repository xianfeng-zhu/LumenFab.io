# InP Substrate Manufacturing Equipment Notes

Context: used to expand `src/pages/components/laser-source.mdx`, section `InP 衬底怎样制造`.

## Source takeaways

- Freiberger divides GaAs / InP wafer manufacturing into synthesis, crystal growth, mechanical wafering, and final wafering / polishing and cleaning.
- InP synthesis:
  - Uses high pressure and InP melting-temperature conditions because phosphorus is a high-vapor-pressure group-V element.
  - Freiberger describes InP synthesis in a high-pressure quartz glass reactor.
  - Phosphorus is sublimated in a lower-temperature zone around 500 C, transported as gas to a crucible with liquid indium, and reacts to form InP.
  - Directional solidification helps separate non-stoichiometric components and impurities before subsequent etching and crystal growth.
- VGF crystal growth:
  - Freiberger states that InP crystals are grown using VGF to guarantee high structural perfection and low dislocation density.
  - VGF equipment uses a pyrolytic boron nitride (pBN) crucible charged with pre-synthesized GaAs or InP and boron oxide.
  - The crucible is placed in a furnace made of separately controlled zones; these zones create near-constant-temperature regions above and below the melting point and a small controlled temperature gradient between them.
  - Growth starts from an oriented seed in the lower crucible, with an upward-moving solid/liquid interface.
  - Heater control sets growth rate and interface shape; low axial temperature gradient, typically below 5 K/cm in Freiberger’s description, is associated with very low dislocation density.
- Characterization:
  - Crystal perfection can be evaluated by etch-pit-density measurements: HBr etching for InP reveals pits where dislocations intersect the surface, and scanning counts the etch pits.
  - Electrical properties can be measured by Hall / van der Pauw methods; resistivity can be mapped contactlessly with tools such as COREMA.
- Wafering and final surface preparation:
  - Wire sawing uses slurry-carrying wire through the crystal; it is an alternative to ID sawing.
  - After sawing, edge grinding and surface grinding, wafers are etched and cleaned.
  - CMP is a chemical / mechanical polishing process: a chemical component oxidizes the surface and a mechanical slurry / pad removes reaction products.
  - Double-side polishing can improve flatness; final cleaning removes particles and resets surface oxide; visual inspection uses high-resolution microscopes and bright illumination.

## Writing implication

For the educational page, describe each manufacturing stage as:

1. What physical problem the stage solves.
2. What equipment or tool family is used.
3. Which variables must be controlled.
4. Why those controls affect laser epitaxy, threshold, dark current and reliability.

Avoid writing a supplier process recipe. The point is conceptual understanding, not a full manufacturing manual.

## Source

- Freiberger Compound Materials, Technology: GaAs / InP Wafer manufacturing  
  https://freiberger.com/en/technology/
