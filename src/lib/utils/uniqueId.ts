const spikeUniqueIdMap = {};

function uniqueId(prefix = "$spike$") {
  if (!spikeUniqueIdMap[prefix]) {
    spikeUniqueIdMap[prefix] = 0;
  }
  spikeUniqueIdMap[prefix]++;
  return prefix + `${spikeUniqueIdMap[prefix]}`;
}

export default uniqueId;
