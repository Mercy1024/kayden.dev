export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  content: string;
  imageUrl?: string;
  tags: string[];
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "The Art of Minimalist Design",
    slug: "art-of-minimalist-design",
    excerpt:
      "Exploring how less becomes more in the world of design and how minimalism creates impact through simplicity.",
    category: "Design",
    date: "2025-04-14",
    author: "Jane Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    tags: ["Design", "Minimalism", "Aesthetics"],
    featured: true,
    content: `
# The Art of Minimalist Design

Minimalism isn't just a design trend—it's a philosophy that emphasizes the removal of excess to reveal what truly matters. In today's visually saturated world, the power of simplicity stands out more than ever.

## The Core Principles

At its heart, minimalist design follows several key principles:

1. **Simplicity**: Removing unnecessary elements
2. **Clarity**: Ensuring each element serves a purpose
3. **Whitespace**: Giving elements room to breathe
4. **Balance**: Creating harmony without symmetry

When these principles come together, they create designs that communicate clearly and effectively.

## How Less Becomes More

The paradox of minimalism is that by removing elements, what remains gains greater significance. A single bold image on a clean background makes a stronger statement than a cluttered collection. A carefully chosen font in a perfect weight needs no embellishment.

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry

This quote perfectly encapsulates the minimalist approach—the discipline to remove until only the essential remains.

## Digital Applications

In user interface design, minimalism has proven particularly effective. Apps and websites that embrace minimalist principles tend to offer:

- Faster cognitive processing for users
- Improved navigation and usability
- Enhanced focus on content and calls-to-action
- Better performance and loading times

### Case Study: Apple

Apple's journey from the skeuomorphic designs of early iOS to the flat, minimalist interfaces of today demonstrates the evolution of digital minimalism. By removing textures, shadows, and decorative elements, Apple created interfaces that put content first.

## Finding Your Minimalist Voice

Adopting minimalist principles doesn't mean all designs should look identical. The challenge is finding the balance between simplicity and personality—creating work that feels both clean and distinctive.

Remember that minimalism isn't about removing until nothing is left. It's about removing until you can't remove anymore without compromising function or meaning.

In a world of constant visual noise, the quiet confidence of minimalist design speaks volumes.
    `,
  },
  {
    id: "2",
    title: "Morning Routines of Successful Writers",
    slug: "morning-routines-of-successful-writers",
    excerpt:
      "Discover the morning habits that famous authors credit for their creativity and productivity.",
    category: "Writing",
    date: "2025-04-10",
    author: "John Smith",
    tags: ["Writing", "Productivity", "Creativity"],
    content: `
# Morning Routines of Successful Writers

The way we begin our days often sets the tone for everything that follows. For writers, whose work requires deep focus and creative energy, morning routines can be especially important.

## The Early Risers

Many successful writers are famously early risers. Haruki Murakami, for example, wakes at 4:00 AM when working on a novel. He describes this routine in his memoir, "What I Talk About When I Talk About Running":

> "I get up at 4:00 am and work for five to six hours. In the afternoon, I run for 10km or swim for 1500m (or do both), then I read a bit and listen to some music. I go to bed at 9:00 pm."

Similarly, Maya Angelou would rent a hotel room where she would arrive at 6:30 AM, armed with a Bible, a thesaurus, a dictionary, and a bottle of sherry. She would write until early afternoon.

## Rituals and Consistency

What's notable about successful writers isn't just when they wake up, but the consistency of their habits. Ernest Hemingway wrote every morning as soon as there was light. "There is no one to disturb you and it is cool or cold and you come to your work and warm as you write," he said.

Joan Didion needed to begin each day by rereading everything she had written on a project so far. For others, the ritual might involve brewing coffee, lighting a candle, or writing in longhand before touching a keyboard.

## Physical Movement

Many writers incorporate physical activity into their morning routines. Murakami runs. Charles Dickens took three-hour walks every morning through London or the countryside. Virginia Woolf walked for hours through London, composing sentences in her head before returning to her desk.

## Finding Your Own Routine

The key takeaway isn't that all writers should wake at dawn, but that having a consistent routine—whatever works for your body clock and circumstances—can train your mind to enter a creative state more reliably.

Consider these elements when crafting your own routine:

1. **Time**: When are you naturally most alert and creative?
2. **Environment**: Where do you work best? Create a space that signals "it's time to write."
3. **Rituals**: What small actions help you transition into writing mode?
4. **Movement**: How might physical activity support your mental work?

Remember that the best routine is one you can actually maintain. Start small, be consistent, and adjust as needed.

The goal isn't to imitate the habits of famous writers, but to discover the conditions that allow your own creativity to flourish.
    `,
  },
  {
    id: "3",
    title: "Sustainable Living in Small Spaces",
    slug: "sustainable-living-in-small-spaces",
    excerpt:
      "Practical tips for an eco-friendly lifestyle when living in apartments or tiny homes.",
    category: "Lifestyle",
    date: "2025-04-03",
    author: "Emily Chen",
    imageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Sustainability", "Minimalism", "Small Spaces"],
    content: `
# Sustainable Living in Small Spaces

Living sustainably doesn't require acres of land for solar panels or a garden. Even in the smallest apartments, you can make choices that reduce your environmental impact while creating a healthier, more intentional living space.

## Minimalism and Sustainability: Natural Partners

Small-space living naturally encourages minimalism, which aligns perfectly with sustainable values:

- **Buy less, choose well**: When space is limited, each purchase must be intentional
- **Multifunctional items**: Furniture that serves multiple purposes reduces resource consumption
- **Quality over quantity**: Investing in durable goods means less waste over time

## Practical Strategies

### Energy Efficiency

Small spaces are generally more energy-efficient to heat and cool, but you can maximize this advantage:

- Use LED lighting throughout your home
- Apply weatherstripping around windows and doors
- Choose Energy Star appliances when possible
- Use smart power strips to eliminate phantom energy use

### Waste Reduction

- Create a compact composting system with a countertop bin or bokashi composter
- Establish a recycling station, even if it's just a set of bags hanging inside a cabinet
- Shop with reusable bags, containers, and produce bags
- Buy in bulk where possible to reduce packaging

### Water Conservation

- Install low-flow aerators on faucets
- Use a water-efficient showerhead
- Collect shower warm-up water in a bucket for plants
- Consider a countertop water filter instead of bottled water

## Small-Space Greenery

Plants improve air quality and wellbeing while connecting us to nature:

- Grow herbs in kitchen windowsills
- Use vertical space with wall planters or hanging baskets
- Choose air-purifying varieties like snake plants or pothos
- Join a community garden if you crave more growing space

## The Mindset Shift

Perhaps the most important aspect of sustainable small-space living is the mindset. Rather than seeing limitations, recognize the benefits:

- Less space to heat, cool, and light means a smaller carbon footprint
- Less room for possessions encourages thoughtful consumption
- Urban locations often allow car-free or car-lite living

Small-space living isn't about sacrifice—it's about intention. By making conscious choices about what you bring into your home and how you use resources, you create a space that's not just sustainable for the planet but sustaining for you.
    `,
  },
  {
    id: "4",
    title: "Digital Detox: Finding Balance in a Connected World",
    slug: "digital-detox-finding-balance",
    excerpt:
      "Strategies for maintaining a healthy relationship with technology in an always-on culture.",
    category: "Wellness",
    date: "2025-03-27",
    author: "Jane Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Digital Wellness", "Mindfulness", "Technology"],
    content: `
# Digital Detox: Finding Balance in a Connected World

In our hyperconnected era, the line between using technology and being used by it has blurred. Many of us feel tethered to our devices, responding to their demands with Pavlovian consistency. Yet we also recognize the tremendous benefits technology brings to our lives.

The goal isn't to abandon our digital tools, but to establish a relationship with technology that enhances rather than diminishes our humanity.

## Signs You Might Need a Digital Reset

- You check your phone within minutes of waking
- You feel anxious when separated from your device
- You struggle to complete focused work without checking notifications
- Real-world social interactions feel less engaging than online ones
- You regularly lose time to algorithmic "rabbit holes"

These aren't signs of personal failure, but symptoms of using tools designed with addictive qualities. The apps and platforms we use employ sophisticated techniques to capture and retain our attention.

## Creating Digital Boundaries

### Physical Strategies

- **Create device-free zones**: Designate certain areas (like bedrooms or dining tables) as technology-free
- **Use physical barriers**: Charge devices outside your bedroom; use an alarm clock instead of your phone
- **Try analog alternatives**: Paper books, notebooks, physical calendars, and watches reduce the need to check devices

### Digital Settings

- **Notification audit**: Question whether each app truly deserves your immediate attention
- **Screen time limits**: Use built-in tools like Screen Time (iOS) or Digital Wellbeing (Android)
- **Grayscale mode**: Reducing color makes screens less visually rewarding
- **"Dumb down" your smartphone**: Remove social media apps or email from your phone

### Temporal Boundaries

- **Tech-free mornings**: Establish a morning routine before engaging with devices
- **Digital sunsets**: Set a cutoff time for screens before bed (ideally 1-2 hours)
- **Regular digital sabbaticals**: Take a day per week or weekend per month off from non-essential technology

## Mindful Technology Use

Rather than viewing digital detox as all-or-nothing, cultivate awareness around technology use:

- Before checking your phone, pause and ask "why am I reaching for this?"
- Set intentions before opening potentially distracting apps
- Schedule specific times for email and social media rather than checking continuously
- Practice single-tasking instead of multitasking with multiple digital streams

## The Benefits of Digital Balance

Those who create healthier technology habits often report:

- Improved sleep quality and duration
- Better concentration and deeper work
- More meaningful in-person connections
- Reduced anxiety and FOMO (fear of missing out)
- Greater presence in their daily lives

The most powerful aspect of digital detox isn't what you remove, but what you make room for: connection, creativity, contemplation, and simply being present in your own life.

Remember that technology should serve your values and goals, not the other way around. With intentional boundaries, you can harness the benefits of our digital world while protecting your most precious resource: your attention.
    `,
  },
  {
    id: "5",
    title: "The Psychology of Space: How Your Environment Shapes Your Mindset",
    slug: "psychology-of-space",
    excerpt:
      "Exploring how the spaces we inhabit influence our thoughts, emotions, and behaviors.",
    category: "Psychology",
    date: "2025-03-18",
    author: "Michael Rodriguez",
    imageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Psychology", "Interior Design", "Wellbeing"],
    content: `
# The Psychology of Space: How Your Environment Shapes Your Mindset

The spaces we inhabit are not merely physical containers—they're powerful psychological influences that shape our thoughts, emotions, and behaviors in ways we often don't consciously register.

## Environmental Psychology

Environmental psychology studies the relationship between people and their physical surroundings. Research from this field has revealed that our environments affect us in profound ways:

- Hospital patients with views of nature recover faster than those facing walls
- Ceiling height can influence thinking style (higher ceilings promote more abstract thinking)
- Natural light exposure improves mood and regulates circadian rhythms
- Clutter reduces our ability to focus and increases stress hormones

## Designing for Different Mental States

Different activities require different mental states, and our spaces can help facilitate them:

### For Creativity

- Slightly messy environments can promote creative thinking
- Spaces with some ambient noise (like coffee shops) may enhance creative work
- Higher ceilings and expansive views encourage big-picture thinking
- Exposure to natural elements sparks creativity

### For Focus

- Minimal visual distractions help maintain attention
- Consistent, moderate lighting reduces eye fatigue
- Sound-dampening elements prevent auditory interruptions
- Personal items that remind you of your purpose can increase motivation

### For Relaxation

- Cool colors (blues, greens) promote calmness
- Soft textures invite touch and comfort
- Curved shapes feel safer than sharp angles
- Nature elements or views reduce stress

## Psychological Principles in Interior Design

Designers have long incorporated psychological principles into their work:

- **Prospect and refuge**: We prefer spaces that offer both views (prospect) and security (refuge)
- **Biophilia**: Humans have an innate attraction to nature and living things
- **Spatial narratives**: Rooms that reveal themselves gradually create intrigue and satisfaction
- **Sensory variation**: Spaces with varied sensory experiences feel more alive and engaging

## Creating Psychologically Supportive Spaces

Even with limited resources or rental restrictions, you can apply these principles:

1. **Assess your needs**: What mental states do you need to support in your space?
2. **Evaluate light sources**: Maximize natural light where possible
3. **Incorporate nature**: Add plants, natural materials, or nature imagery
4. **Consider sensory experiences**: Address not just visuals but textures, sounds, and scents
5. **Create zones**: Designate areas for different activities, even in small spaces
6. **Personalize meaningfully**: Include items that reflect your values and aspirations

## Mindful Awareness of Your Environment

Perhaps the most important step is simply becoming more conscious of how your environments affect you:

- Notice how different spaces make you feel
- Observe which environments help you think clearly versus feel scattered
- Pay attention to spaces where you naturally feel calm or energized

With greater awareness, you can make even small adjustments that significantly impact your wellbeing and cognitive function.

By understanding the psychology of space, you gain agency not just in designing your environment, but in choosing and modifying the spaces you inhabit to better support your mental and emotional needs.
    `,
  },
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};

export const getFeaturedPost = (): Post | undefined => {
  return posts.find((post) => post.featured);
};

export const getRecentPosts = (
  excludeId?: string,
  limit: number = 3
): Post[] => {
  return posts
    .filter((post) => post.id !== excludeId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getPostsByCategory = (category: string): Post[] => {
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  posts.forEach((post) => categories.add(post.category));
  return Array.from(categories);
};

export const searchPosts = (query: string): Post[] => {
  const lowerCaseQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerCaseQuery) ||
      post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
      post.content.toLowerCase().includes(lowerCaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))
  );
};
