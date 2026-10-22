/**
 * Köszönést ad vissza a megadott névnek.
 *
 * @param name A köszöntendő neve. Alapértelmezetten "World".
 * @returns A köszöntő szöveg, pl. "Hello, World!".
 */
export function hello(name = "World"): string {
  return `Hello, ${name}!`;
}
