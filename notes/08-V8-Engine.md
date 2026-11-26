## Internal Working Of Javascript Chrome V8 Engine

- Refer - https://astexplorer.net/ - You can make use of this website to convert your code into AST.
- Refer - https://www.freecodecamp.org/news/javascript-under-the-hood-v8/
  - Internal working of javascript V8 Engine
  - Compilation vs Intepretation
  - Javascript is interpreted or compiled language - JIT
  - Byte code vs Machine code
  - Inline Caching vs Copy Elision
  - Optimization vs De-optimization
  - Different Garbage Collectors
    - Scavenger
    - Mark-Sweep Compact Approach - Minor | Major
    - Orinoco (For Heap memory)
    - Oilpan

## Internal Steps of V8 Execution

1. Parsing Source Code
   - Transforms raw JavaScript text into a structured representation.
   - Lexical analysis converts code into tokens
   - Parser builds an Abstract Syntax Tree (AST)
   - AST represents the hierarchical structure of the code

2. Ignition Interpreter
   - Startup Execution and generates and executes bytecode for fast startup.
   - AST is converted into bytecode instructions
   - Ignition executes bytecode directly
   - Collects profiling data for later optimizations

3. Sparkplug Baseline Compiler
   - Compiles bytecode into machine code quickly without heavy optimizations.
   - Provides faster execution than interpretation
   - Focuses on speed of compilation rather than peak performance

4. Maglev Mid-tier Compiler
   - Optimizes code faster than TurboFan but better than Sparkplug.
   - Generates more efficient machine code
   - Balances compilation speed and runtime performance

5. TurboFan / Turboshaft Optimizer
   - Peak Performance
   - Produces highly optimized machine code for hot functions. (which needs to be compiled or optimized)
   - Uses advanced intermediate representations (IR)
   - Applies aggressive optimizations like inlining and constant folding
   - Turboshaft replaces TurboFan with a linear IR for efficiency

6. Memory Management
   - Manages heap objects and reclaims unused memory.
   - Uses a generational garbage collector (young vs old generation)
   - Employs concurrent marking and sweeping
   - Resolves fragmentation with heap compaction

7. Object Model & Inline Caching
   - Optimizes property access and object structure.
   - Uses hidden classes (Maps) to represent object layouts
   - Inline Caching speeds up repeated property lookups
   - Adapts storage based on property types
