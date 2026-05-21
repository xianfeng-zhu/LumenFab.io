# Quantum Dot Lattice Mismatch Notes

Context: used to refine the `晶格失配` explanation in `src/pages/components/laser-source.mdx`.

## Key takeaways

- In conventional quantum-well or DFB laser epitaxy, lattice mismatch between epitaxial layers and the substrate is usually treated as a defect risk: strain can relax through misfit and threading dislocations, which may create non-radiative recombination centers and reliability problems.
- Self-assembled quantum dot structures are an important exception. In Stranski-Krastanov growth, controlled lattice-mismatch strain can drive a transition from a thin two-dimensional wetting layer to three-dimensional coherent islands. These islands can act as quantum dots.
- NIST describes self-assembled InGaAs quantum dots as forming when a highly strained heteroepitaxial layer transforms from a two-dimensional film to three-dimensional islands. It also notes InAs/GaAs lattice mismatch around 7.2%, and that InAs grows only about 1.8 monolayers in a two-dimensional manner before breaking into coherently strained islands.
- Recent InAs/InP quantum dot work also treats Stranski-Krastanov growth as a tunable route to control quantum-dot density and size, relevant to InP-compatible quantum-dot photonics and lasers.
- Wording implication for the page: say that lattice mismatch is a risk in the laser structure currently being explained, while noting that some quantum-dot laser active-region designs intentionally use controlled mismatch strain to form self-assembled quantum dots.

## Sources

- NIST: Growth, characterization, and applications of self-assembled InGaAs quantum dots  
  https://www.nist.gov/publications/growth-characterization-and-applications-self-assembled-ingaas-quantum-dots
- PubMed / Scientific Reports: Near-critical Stranski-Krastanov growth of InAs/InP quantum dots  
  https://pubmed.ncbi.nlm.nih.gov/39390005/
- Materials 2021: Optical Properties of Site-Selectively Grown InAs/InP Quantum Dots with Predefined Positioning by Block Copolymer Lithography  
  https://www.mdpi.com/1996-1944/14/2/391/htm
