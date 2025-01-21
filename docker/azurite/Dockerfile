# Official blob storage image from Microsoft
FROM mcr.microsoft.com/azure-storage/azurite

# Expose the ports for Blob, Queue, and Table services (respectively)
EXPOSE 10000 10001 10002

# Command to start Azurite with local settings
CMD ["azurite", "--blobHost", "0.0.0.0", "--queueHost", "0.0.0.0", "--tableHost", "0.0.0.0"]
