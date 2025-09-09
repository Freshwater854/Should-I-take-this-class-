// Quiz data for different subjects
const quizData = {
  algebra1: {
    title: "Algebra 1 Readiness Assessment",
    description: "Assess your readiness for Algebra 1",
    isAP: false,
    questions: [
      {
        id: 'basic_arithmetic',
        text: 'How comfortable are you with basic arithmetic operations (addition, subtraction, multiplication, division)?',
        example: 'Example: 15 + 27 = ?, 8 × 6 = ?, 45 ÷ 9 = ?',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.5
      },
      {
        id: 'fractions_decimals',
        text: 'How well do you work with fractions and decimals?',
        example: 'Example: 3/4 + 1/2 = ?, 0.25 × 8 = ?, Convert 0.6 to a fraction',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.5
      },
      {
        id: 'solving_equations',
        text: 'How comfortable are you with solving simple equations (like x + 5 = 12)?',
        example: 'Example: x + 5 = 12, 2x = 18, 3x - 7 = 14',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'word_problems',
        text: 'How well do you solve word problems that require setting up equations?',
        example: 'Example: "A number plus 7 equals 15. What is the number?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      },
      {
        id: 'graphing_basics',
        text: 'How comfortable are you with basic graphing (plotting points, reading graphs)?',
        example: 'Example: Plot (2, 3) on a coordinate plane, read values from a line graph',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.2
      },
      {
        id: 'algebraic_expressions',
        text: 'How well do you work with algebraic expressions (combining like terms, distributing)?',
        example: 'Example: 3x + 2x = 5x, 2(x + 3) = 2x + 6',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      }
    ]
  },

  algebra2: {
    title: "Algebra 2 Readiness Assessment",
    description: "Assess your readiness for Algebra 2",
    isAP: false,
    questions: [
      {
        id: 'algebra1_linear_equations',
        text: 'How well do you solve linear equations and inequalities?',
        example: 'Example: 2x + 5 = 13, 3x - 2 > 7',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'algebra1_graphing',
        text: 'How comfortable are you with graphing linear functions and systems?',
        example: 'Example: Graph y = 2x + 3, solve system: y = x + 1, y = -x + 5',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'algebra1_factoring',
        text: 'How well do you factor polynomials and solve quadratic equations?',
        example: 'Example: x² + 5x + 6 = (x + 2)(x + 3), solve x² - 4 = 0',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'algebra1_exponents',
        text: 'How comfortable are you with exponent rules and radical expressions?',
        example: 'Example: x³ × x² = x⁵, √16 = 4, (2x)³ = 8x³',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'basic_arithmetic',
        text: 'How strong are your basic arithmetic skills (fractions, decimals, percentages)?',
        example: 'Example: 1/4 + 1/3 = ?, 0.25 = 25%, 3/5 = 0.6',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.5
      },
      {
        id: 'word_problems',
        text: 'How well do you solve word problems and set up equations?',
        example: 'Example: "Twice a number plus 5 equals 17. What is the number?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      }
    ]
  },

  geometry: {
    title: "Geometry Readiness Assessment",
    description: "Assess your readiness for Geometry",
    isAP: false,
    questions: [
      {
        id: 'algebra1_skills',
        text: 'How strong are your algebra skills (solving equations, working with variables)?',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'basic_arithmetic',
        text: 'How well do you work with basic arithmetic (fractions, decimals, square roots)?',
        example: 'Example: 1/2 + 1/3 = ?, √25 = 5, 0.75 = 3/4',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'coordinate_plane',
        text: 'How comfortable are you with the coordinate plane and plotting points?',
        example: 'Example: Plot (3, -2) on a coordinate plane, find distance between (1,1) and (4,5)',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'basic_shapes',
        text: 'How well do you understand basic geometric shapes?',
        example: 'Example: Area of rectangle = length × width, Perimeter of triangle = sum of sides',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.5
      },
      {
        id: 'logical_reasoning',
        text: 'How comfortable are you with logical reasoning and step-by-step problem solving?',
        example: 'Example: If A = B and B = C, then A = C (transitive property)',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'spatial_visualization',
        text: 'How strong is your spatial reasoning and ability to visualize 2D and 3D shapes?',
        example: 'Example: Visualize rotating a square 90°, imagine a cube from different angles',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      }
    ]
  },

  precalc: {
    title: "AP Precalculus Readiness Assessment",
    description: "Assess your readiness for AP Precalculus",
    isAP: true,
    questions: [
      {
        id: 'algebra2_polynomials',
        text: 'How well do you work with polynomials and factoring?',
        example: 'Example: (x + 2)(x - 3) = x² - x - 6, factor x² - 9 = (x + 3)(x - 3)',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'algebra2_rational',
        text: 'How comfortable are you with rational functions and equations?',
        example: 'Example: (x + 1)/(x - 2) = 3, simplify (x² - 4)/(x + 2)',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'algebra2_exponentials',
        text: 'How well do you understand exponential and logarithmic functions?',
        example: 'Example: 2³ = 8, log₂(8) = 3, 3ˣ = 27 → x = 3',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'geometry_triangles',
        text: 'How well do you understand triangle properties and right triangle trigonometry?',
        example: 'Example: In a 30-60-90 triangle, if short side = 3, then hypotenuse = 6',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'geometry_circles',
        text: 'How comfortable are you with circle properties and coordinate geometry?',
        example: 'Example: Circle equation (x-2)² + (y+1)² = 25, center (2,-1), radius 5',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      },
      {
        id: 'algebra1_skills',
        text: 'How strong are your Algebra 1 skills (linear equations, graphing, systems)?',
        example: 'Example: Solve 2x + 3y = 7, x - y = 1, graph y = 2x + 3',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'basic_arithmetic',
        text: 'How well do you work with fractions, decimals, and complex number operations?',
        example: 'Example: (3 + 4i) + (2 - i) = 5 + 3i, 1/2 + 1/3 = 5/6',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.5
      },
      {
        id: 'word_problems',
        text: 'How well do you solve complex word problems?',
        example: 'Example: "A train travels 120 miles in 2 hours. What is its average speed?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      }
    ]
  },

  'calc-ab': {
    title: "AP Calculus AB Readiness Assessment",
    description: "Assess your readiness for AP Calculus AB",
    isAP: true,
    questions: [
      {
        id: 'precalc_trig',
        text: 'How well do you understand trigonometry and the unit circle?',
        example: 'Example: sin(π/2) = 1, cos(π) = -1, tan(π/4) = 1',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 3.0
      },
      {
        id: 'precalc_functions',
        text: 'How comfortable are you with function composition and transformations?',
        example: 'Example: f(g(x)) = f(x²) = 2x² + 1, shift y = x² right 2 units',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'algebra2_polynomials',
        text: 'How well do you work with polynomials and rational functions from Algebra 2?',
        example: 'Example: (x³ - 8)/(x - 2) = x² + 2x + 4, long division',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'algebra2_exponentials',
        text: 'How comfortable are you with exponential and logarithmic functions from Algebra 2?',
        example: 'Example: eˣ = 5 → x = ln(5), log₃(27) = 3',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'geometry_coordinate',
        text: 'How well do you work with coordinate geometry and graphing?',
        example: 'Example: Distance formula √[(x₂-x₁)² + (y₂-y₁)²], midpoint formula',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'algebra1_skills',
        text: 'How strong are your algebra skills (linear equations, systems, word problems)?',
        example: 'Example: Solve 3x + 2y = 8, 2x - y = 1, set up equation from word problem',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'basic_arithmetic',
        text: 'How well do you work with fractions, decimals, and complex calculations?',
        example: 'Example: 2/3 + 1/4 = 11/12, 0.125 = 1/8, 3.14 × 2.5 = 7.85',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.5
      },
      {
        id: 'word_problems',
        text: 'How well do you solve complex word problems and mathematical reasoning?',
        example: 'Example: "A ball is thrown upward with velocity 32 ft/s. When does it reach max height?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      }
    ]
  },

  'calc-bc': {
    title: "AP Calculus BC Readiness Assessment",
    description: "Assess your readiness for AP Calculus BC",
    isAP: true,
    questions: [
      {
        id: 'calc_ab_derivatives',
        text: 'How strong are your derivative skills (chain rule, product rule, etc.)?',
        example: 'Example: d/dx[x²] = 2x, d/dx[sin(x)] = cos(x), chain rule d/dx[f(g(x))]',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 3.0
      },
      {
        id: 'calc_ab_integrals',
        text: 'How well do you understand integration and the Fundamental Theorem?',
        example: 'Example: ∫x dx = x²/2 + C, ∫₀¹ x² dx = 1/3, FTC: d/dx[∫₀ˣ f(t) dt] = f(x)',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 3.0
      },
      {
        id: 'precalc_trig',
        text: 'How well do you understand trigonometry and the unit circle?',
        example: 'Example: sin(π/6) = 1/2, cos(π/3) = 1/2, tan(π/4) = 1',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'precalc_functions',
        text: 'How comfortable are you with function composition and transformations?',
        example: 'Example: f(g(x)) = f(2x) = (2x)² + 1, shift y = x² up 3 units',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'algebra2_polynomials',
        text: 'How well do you work with polynomials and rational functions from Algebra 2?',
        example: 'Example: (x⁴ - 16)/(x - 2) = x³ + 2x² + 4x + 8, synthetic division',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'algebra2_exponentials',
        text: 'How comfortable are you with exponential and logarithmic functions from Algebra 2?',
        example: 'Example: eˣ = 5 → x = ln(5), log₃(27) = 3',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'geometry_coordinate',
        text: 'How well do you work with coordinate geometry and parametric equations?',
        example: 'Example: x = 2cos(t), y = 2sin(t) is a circle, distance formula',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      },
      {
        id: 'algebra1_skills',
        text: 'How strong are your algebra skills (linear equations, systems, word problems)?',
        example: 'Example: Solve 4x + 3y = 10, 2x - y = 3, set up equation from word problem',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.5
      },
      {
        id: 'basic_arithmetic',
        text: 'How well do you work with fractions, decimals, and complex calculations?',
        example: 'Example: 5/6 + 2/3 = 3/2, 0.375 = 3/8, 2.5 × 1.6 = 4.0',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.2
      },
      {
        id: 'word_problems',
        text: 'How well do you solve complex word problems and mathematical reasoning?',
        example: 'Example: "A ball is thrown upward with velocity 32 ft/s. When does it reach max height?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      }
    ]
  },

  physics1: {
    title: "AP Physics 1 Readiness Assessment",
    description: "Assess your readiness for AP Physics 1",
    isAP: true,
    questions: [
      {
        id: 'algebra_skills',
        text: 'How strong are your algebra skills for solving equations?',
        example: 'Example: Solve v = v₀ + at for t, rearrange F = ma to find a',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 3.0
      },
      {
        id: 'mathematical_reasoning',
        text: 'How well do you apply mathematical reasoning to solve complex word problems?',
        example: 'Example: "A car accelerates from 0 to 60 mph in 10 seconds. What is its acceleration?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 3.0
      },
      {
        id: 'geometry_skills',
        text: 'How well do you understand geometry concepts (triangles, circles, angles)?',
        example: 'Example: Right triangle with sides 3, 4, 5, angle between 3 and 4 is 90°',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'trigonometry',
        text: 'How comfortable are you with trigonometry (sin, cos, tan)?',
        example: 'Example: sin(30°) = 1/2, cos(60°) = 1/2, tan(45°) = 1',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'basic_arithmetic',
        text: 'How well do you work with fractions, decimals, and unit conversions?',
        example: 'Example: 1 km = 1000 m, 1 hour = 3600 s, 1/2 + 1/3 = 5/6',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'graphing_skills',
        text: 'How comfortable are you with graphing and interpreting graphs?',
        example: 'Example: Graph y = 2x + 3, read slope from position vs time graph',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'logical_reasoning',
        text: 'How well do you break down complex problems into smaller, manageable steps?',
        example: 'Example: "Find the time for a ball to hit the ground" → 1) Identify given info 2) Choose equation 3) Solve',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'word_problems',
        text: 'How well do you solve word problems and set up equations?',
        example: 'Example: "A 2 kg object accelerates at 3 m/s². What force is applied?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      }
    ]
  },

  physics2: {
    title: "AP Physics 2 Readiness Assessment",
    description: "Assess your readiness for AP Physics 2",
    isAP: true,
    questions: [
      {
        id: 'physics1_mechanics',
        text: 'How strong are your mechanics skills (kinematics, forces, energy)?',
        example: 'Example: v = v₀ + at, F = ma, KE = ½mv², PE = mgh',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 3.0
      },
      {
        id: 'physics1_waves',
        text: 'How well do you understand wave properties and behavior?',
        example: 'Example: v = fλ, frequency = 1/T, wave speed = distance/time',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'algebra_skills',
        text: 'How strong are your algebra skills for solving complex equations?',
        example: 'Example: Solve quadratic equations, work with exponents, manipulate formulas',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'mathematical_reasoning',
        text: 'How well do you apply mathematical reasoning to solve complex word problems?',
        example: 'Example: "A charged particle moves in a magnetic field. Find its path."',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.5
      },
      {
        id: 'geometry_skills',
        text: 'How well do you understand geometry concepts (triangles, circles, angles)?',
        example: 'Example: Right triangle with sides 3, 4, 5, angle between 3 and 4 is 90°',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'trigonometry',
        text: 'How comfortable are you with trigonometry (sin, cos, tan)?',
        example: 'Example: sin(30°) = 1/2, cos(60°) = 1/2, tan(45°) = 1',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'basic_arithmetic',
        text: 'How well do you work with fractions, decimals, and unit conversions?',
        example: 'Example: 1 km = 1000 m, 1 hour = 3600 s, 1/2 + 1/3 = 5/6',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      },
      {
        id: 'graphing_skills',
        text: 'How comfortable are you with graphing and interpreting graphs?',
        example: 'Example: Graph y = 2x + 3, read slope from position vs time graph',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      },
      {
        id: 'logical_reasoning',
        text: 'How well do you break down complex problems into smaller, manageable steps?',
        example: 'Example: "Find the electric field at a point" → 1) Identify charges 2) Choose equation 3) Calculate',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 2.0
      },
      {
        id: 'word_problems',
        text: 'How well do you solve word problems and set up equations?',
        example: 'Example: "Twice a number plus 5 equals 17. What is the number?"',
        type: 'slider',
        min: 0,
        max: 10,
        labels: ['Very Weak', 'Weak', 'Below Average', 'Average', 'Above Average', 'Good', 'Very Good', 'Strong', 'Very Strong', 'Excellent'],
        points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        weight: 1.8
      }
    ]
  }
};

// Global variables
let currentQuiz = null;
let currentQuestion = 0;
let answers = {};

// DOM elements
const homePage = document.getElementById('home-page');
const quizSelectionPage = document.getElementById('quiz-selection-page');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');
const questionText = document.getElementById('question-text');
const questionOptions = document.getElementById('question-options');
const questionCounter = document.getElementById('question-counter');
const progressFill = document.getElementById('progress-fill');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Show quiz selection
function showQuizSelection() {
  homePage.style.display = 'none';
  quizSelectionPage.style.display = 'block';
  quizPage.style.display = 'none';
  resultsPage.style.display = 'none';
}

// Go back to home
function goHome() {
  homePage.style.display = 'block';
  quizSelectionPage.style.display = 'none';
  quizPage.style.display = 'none';
  resultsPage.style.display = 'none';
}

// Start specific quiz
function startQuiz(quizType) {
  currentQuiz = quizType;
  currentQuestion = 0;
  answers = {};
  quizSelectionPage.style.display = 'none';
  quizPage.style.display = 'block';
  resultsPage.style.display = 'none';
  showQuestion();
}

// Show current question
function showQuestion() {
  const quiz = quizData[currentQuiz];
  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  
  questionText.innerHTML = `
    <div class="question-main">${question.text}</div>
    ${question.example ? `<div class="question-example">${question.example}</div>` : ''}
  `;
  questionCounter.textContent = `Question ${currentQuestion + 1} of ${quiz.questions.length}`;
  progressFill.style.width = `${progress}%`;
  
  // Clear previous options
  questionOptions.innerHTML = '';
  
  if (question.type === 'slider') {
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    sliderContainer.innerHTML = `
      <input type="range" min="${question.min}" max="${question.max}" 
             value="${answers[question.id] || 5}" 
             step="0.1"
             oninput="updateSlider('${question.id}', this.value)" 
             class="slider">
      <div class="slider-labels">
        <span>Very Weak</span>
        <span class="neutral-label">Neutral</span>
        <span>Very Strong</span>
      </div>
      <div class="slider-value" id="slider-value-${question.id}">
        ${answers[question.id] || 5}
      </div>
    `;
    questionOptions.appendChild(sliderContainer);
  }
  
  // Update button states
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = answers[question.id] === undefined;
  nextBtn.textContent = currentQuestion === quiz.questions.length - 1 ? 'Get Results' : 'Next';
}

// Update slider
function updateSlider(questionId, value) {
  answers[questionId] = parseFloat(value);
  const sliderValue = document.getElementById(`slider-value-${questionId}`);
  sliderValue.textContent = parseFloat(value).toFixed(1);
  
  // Enable next button
  nextBtn.disabled = false;
}

// Previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

// Next question
function nextQuestion() {
  const quiz = quizData[currentQuiz];
  if (currentQuestion < quiz.questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
}

// Calculate score with weighted scoring
function calculateScore() {
  let totalScore = 0;
  let totalWeight = 0;
  const quiz = quizData[currentQuiz];
  
  quiz.questions.forEach(question => {
    const answer = answers[question.id];
    if (answer !== undefined) {
      if (question.type === 'slider') {
        const weight = question.weight || 1;
        totalScore += answer * weight;
        totalWeight += weight;
      }
    }
  });
  
  // Calculate weighted average and scale to 100
  if (totalWeight > 0) {
    const weightedAverage = totalScore / totalWeight;
    return Math.round((weightedAverage / 10) * 100);
  }
  return 0;
}

// Get course name without "Readiness Assessment"
function getCourseName(quizTitle) {
  return quizTitle.replace(' Readiness Assessment', '');
}

// Get recommendation based on quiz type and score
function getRecommendation(quizType, score) {
  const quiz = quizData[quizType];
  const isAP = quiz.isAP;
  const courseName = getCourseName(quiz.title);
  
  if (score >= 95) {
    return {
      level: 'exceptional',
      title: 'Exceptional Readiness!',
      message: `You're exceptionally well-prepared for ${courseName}. You'll likely excel with minimal effort and could even help other students.`,
      effort: '1-2 hours per week',
      apScore: isAP ? 'AP 5' : null,
      grade: isAP ? 'A+' : 'A+',
      color: 'success'
    };
  } else if (score >= 85) {
    return {
      level: 'excellent',
      title: 'Excellent Readiness!',
      message: `You're well-prepared for ${courseName}. Expect to handle the material smoothly with minimal additional preparation.`,
      effort: '2-3 hours per week',
      apScore: isAP ? 'AP 4-5' : null,
      grade: isAP ? 'A to A+' : 'A- to A+',
      color: 'success'
    };
  } else if (score >= 75) {
    return {
      level: 'very_good',
      title: 'Very Good Readiness',
      message: `You're well-prepared for ${courseName}. Expect to handle the material well with some additional preparation.`,
      effort: '3-4 hours per week',
      apScore: isAP ? 'AP 3-4' : null,
      grade: isAP ? 'B+ to A-' : 'B+ to A-',
      color: 'success'
    };
  } else if (score >= 65) {
    return {
      level: 'good',
      title: 'Good Readiness',
      message: `You can take ${courseName}, but plan on 4-6 extra study hours per week to stay on track. Consider reviewing foundational concepts first.`,
      effort: '5-8 hours per week',
      apScore: isAP ? 'AP 3' : null,
      grade: isAP ? 'B to B+' : 'B to B+',
      color: 'warning'
    };
  } else if (score >= 55) {
    return {
      level: 'fair',
      title: 'Fair Readiness',
      message: `You can take ${courseName}, but you'll need to work hard. Plan on 6-10 extra study hours per week and consider getting a tutor.`,
      effort: '8-12 hours per week',
      apScore: isAP ? 'AP 2-3' : null,
      grade: isAP ? 'C+ to B-' : 'C+ to B-',
      color: 'warning'
    };
  } else if (score >= 45) {
    return {
      level: 'poor',
      title: 'Poor Readiness',
      message: `You may struggle significantly with ${courseName}. Consider taking review courses or getting intensive tutoring before enrolling.`,
      effort: '10-15 hours per week',
      apScore: isAP ? 'AP 1-2' : null,
      grade: isAP ? 'C to C+' : 'C to C+',
      color: 'danger'
    };
  } else if (score >= 30) {
    return {
      level: 'very_poor',
      title: 'Very Poor Readiness',
      message: `You need substantial preparation before taking ${courseName}. Consider taking prerequisite courses or intensive tutoring first.`,
      effort: '15+ hours per week',
      apScore: isAP ? 'AP 1' : null,
      grade: isAP ? 'D to C-' : 'D to C-',
      color: 'danger'
    };
  } else {
    return {
      level: 'not_ready',
      title: 'Not Ready',
      message: `You need significant preparation before taking ${courseName}. Consider taking prerequisite courses or intensive tutoring first.`,
      effort: '20+ hours per week',
      apScore: isAP ? 'AP 1' : null,
      grade: isAP ? 'Below D' : 'Below D',
      color: 'danger'
    };
  }
}

// Get study tips based on quiz type and answers
function getStudyTips(quizType, score, answers) {
  const tips = [];
  const quiz = quizData[quizType];
  
  // General tips based on score
  if (score < 60) {
    tips.push("Consider working with a tutor or joining a study group for additional support");
    tips.push("Take advantage of online resources like Khan Academy, Coursera, or MIT OpenCourseWare");
  }
  
  // Subject-specific tips
  if (quizType === 'algebra1') {
    if (answers.basic_arithmetic && answers.basic_arithmetic <= 5) {
      tips.push("Review basic arithmetic operations and practice mental math");
    }
    if (answers.fractions_decimals && answers.fractions_decimals <= 5) {
      tips.push("Practice working with fractions and decimals until you're comfortable");
    }
    if (answers.solving_equations && answers.solving_equations <= 5) {
      tips.push("Start with simple one-step equations and gradually work up to more complex ones");
    }
  }
  
  if (quizType === 'algebra2') {
    if (answers.algebra1_skills && answers.algebra1_skills <= 5) {
      tips.push("Strengthen your Algebra 1 foundation before attempting Algebra 2");
    }
    if (answers.quadratic_equations && answers.quadratic_equations <= 5) {
      tips.push("Practice factoring and using the quadratic formula");
    }
  }
  
  if (quizType === 'geometry') {
    if (answers.algebra_skills && answers.algebra_skills <= 5) {
      tips.push("Review algebra skills needed for geometric problem solving");
    }
    if (answers.proofs && answers.proofs <= 5) {
      tips.push("Practice logical reasoning and step-by-step problem solving");
    }
  }
  
  if (quizType === 'precalc') {
    if (answers.unit_circle && answers.unit_circle <= 5) {
      tips.push("Memorize the unit circle and practice converting between degrees and radians");
    }
    if (answers.trig_functions && answers.trig_functions <= 5) {
      tips.push("Practice graphing and working with trigonometric functions");
    }
  }
  
  if (quizType === 'calc-ab' || quizType === 'calc-bc') {
    if (answers.precalc_skills && answers.precalc_skills <= 5) {
      tips.push("Strengthen your Precalculus foundation before attempting Calculus");
    }
    if (answers.limits && answers.limits <= 5) {
      tips.push("Practice understanding limits conceptually and algebraically");
    }
  }
  
  if (quizType === 'physics1') {
    if (answers.algebra_skills && answers.algebra_skills <= 5) {
      tips.push("Strengthen your algebra skills for solving physics equations");
    }
    if (answers.mathematical_reasoning && answers.mathematical_reasoning <= 5) {
      tips.push("Practice breaking down complex problems into smaller, manageable steps");
    }
  }
  
  if (quizType === 'physics2') {
    if (answers.physics1_skills && answers.physics1_skills <= 5) {
      tips.push("Review Physics 1 concepts before attempting Physics 2");
    }
    if (answers.electric_fields && answers.electric_fields <= 5) {
      tips.push("Practice visualizing electric fields and understanding field lines");
    }
  }
  
  if (score >= 60) {
    tips.push("You're on the right track! Continue building your mathematical foundation");
    if (quizType.includes('calc') || quizType.includes('physics')) {
      tips.push("Consider challenging yourself with practice problems from AP exam prep books");
    }
  }
  
  return tips;
}

// Show results
function showResults() {
  const score = calculateScore();
  const quiz = quizData[currentQuiz];
  const recommendation = getRecommendation(currentQuiz, score);
  const studyTips = getStudyTips(currentQuiz, score, answers);
  
  // Hide quiz page, show results page
  quizPage.style.display = 'none';
  resultsPage.style.display = 'block';
  
  // Update score display (always out of 100)
  document.getElementById('score-display').textContent = `${score}/100`;
  
  // Update recommendation
  const recElement = document.getElementById('recommendation');
  recElement.className = `recommendation ${recommendation.color}`;
  document.getElementById('rec-title').textContent = recommendation.title;
  document.getElementById('rec-message').textContent = recommendation.message;
  document.getElementById('rec-effort').textContent = recommendation.effort;
  
  // Update prediction based on course type
  const predictionElement = document.getElementById('ap-range');
  const predictionTitle = document.getElementById('prediction-title');
  const predictionText = document.getElementById('prediction-text');
  
  if (quiz.isAP) {
    predictionTitle.textContent = 'AP Score & Grade Predictions';
    if (recommendation.apScore) {
      predictionText.innerHTML = 
        `Based on your current readiness, you could expect to score <strong>${recommendation.apScore}</strong> on the AP exam and earn a grade of <strong>${recommendation.grade}</strong> in the class with appropriate preparation and study time.`;
    } else {
      predictionText.innerHTML = 
        `Based on your current readiness, you could expect to earn a grade of <strong>${recommendation.grade}</strong> in the class with appropriate preparation and study time.`;
    }
  } else {
    predictionTitle.textContent = 'Grade Prediction';
    predictionText.innerHTML = 
      `Based on your current readiness, you could expect to earn a grade in the <strong>${recommendation.grade}</strong> range with appropriate preparation and study time.`;
  }
  
  // Update study tips
  const tipsList = document.getElementById('study-tips');
  tipsList.innerHTML = '';
  studyTips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });
}

// Restart quiz
function restartQuiz() {
  currentQuiz = null;
  currentQuestion = 0;
  answers = {};
  homePage.style.display = 'block';
  quizSelectionPage.style.display = 'none';
  quizPage.style.display = 'none';
  resultsPage.style.display = 'none';
}
