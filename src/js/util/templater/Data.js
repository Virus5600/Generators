const elMap = new Map();

/**
 * Stores component instances on a 2D map, allowing a single component per element.
 *
 * All credit goes to Bootstrap's source code as this was from their code base.
 */
export default {
	set(el, key, instance) {
		if (!elMap.has(el))
			elMap.set(el, new Map());

		const instanceMap = elMap.get(el);

		if (!instanceMap.has(key) && instanceMap.size !== 0) {
			console.error(`Only a single instance of component is allowed. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
			return;
		}

		instanceMap.set(key, instance);
	},
	get(el, key) {
		if (elMap.has(el))
			return elMap.get(el).get(key) || null;

		return null;
	},
	remove(el, key) {
		if (!elMap.has(el))
			return;

		const instanceMap = elMap.get(el);
		instanceMap.delete(key);

		if (instanceMap.size === 0)
			elMap.delete(el);
	},
	list() {
		return elMap;
	},
}
